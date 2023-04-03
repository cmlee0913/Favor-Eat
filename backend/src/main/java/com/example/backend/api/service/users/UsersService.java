package com.example.backend.api.service.users;

import com.example.backend.api.dto.foods.response.ResponseTasteInfo;
import com.example.backend.api.dto.users.request.RequestTasteEvaluations;
import com.example.backend.api.dto.users.response.ResponseUserInfo;
import com.example.backend.api.entity.users.Evaluations;
import com.example.backend.api.entity.users.Role;
import com.example.backend.api.entity.users.Users;
import com.example.backend.api.repository.users.EvaluationsRepository;
import com.example.backend.api.repository.users.UsersRepository;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Service
@RequiredArgsConstructor
public class UsersService {

    private final UsersRepository usersRepository;
    private final EvaluationsRepository evaluationsRepository;

    /**
     * remove refresh token
     *
     * @param no must not be null
     * @return entity with No equal to given value
     * @throws NullPointerException can't find user
     */
    @Transactional
    public Users signOutUser(Long no) {
        Users users = usersRepository.findByNo(no).orElseThrow(NullPointerException::new);
        users.updateRefreshToken(null);
        return usersRepository.save(users);
    }

    public ResponseUserInfo getUserInfo(Long no) {
        log.info("getUserInfo() 호출");
        Users users = usersRepository.findByNo(no).orElseThrow(NullPointerException::new);

        Map<String, Float> averageFlavorValues = evaluationsRepository.getAverageByNo(no);
        ResponseTasteInfo userTasteInfo = ResponseTasteInfo.builder()
            .salty(averageFlavorValues.get("saltiness"))
            .spicy(averageFlavorValues.get("spiciness"))
            .sweet(averageFlavorValues.get("sweetness"))
            .oily(averageFlavorValues.get("fatness")).build();

        return ResponseUserInfo.builder()
            .alarm(users.isAlarm())
            .responseTasteInfo(userTasteInfo)
            .build();
    }


    /**
     * save evaluations and change user's role
     *
     * @param no                      must not be null
     * @param requestTasteEvaluations must not be null
     * @return entity
     * @throws RuntimeException failed to save evaluations
     */
    @Transactional(rollbackOn = RuntimeException.class)
    public Users registInitialEvaluations(Long no,
        List<RequestTasteEvaluations> requestTasteEvaluations) throws RuntimeException {
        for (RequestTasteEvaluations tasteEvaluations : requestTasteEvaluations) {
            evaluationsRepository.save(tasteEvaluations.toEntity(no));
        }

        Optional<Users> users = usersRepository.findByNo(no);
        users.ifPresentOrElse(user -> {
            user.updateRole(Role.USER);

            // 요청 보내기
            MultiValueMap<String, Long> params = new LinkedMultiValueMap<>();
            params.add("no", no);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<MultiValueMap<String, Long>> entity = new HttpEntity<>(params, headers);

            RestTemplate rt = new RestTemplate();

            ResponseEntity<Object> response = rt.exchange(
                "http://localhost:6000/predict", //{요청할 서버 주소}
                HttpMethod.POST, //{요청할 방식}
                entity, // {요청할 때 보낼 데이터}
                Object.class
            );

            if (response.getStatusCode().equals(HttpStatus.INTERNAL_SERVER_ERROR)) {
                throw new RuntimeException();
            }

        }, () -> {
            throw new RuntimeException();
        });

        return users.get();

    }

    /**
     * remove refresh token
     *
     * @param no                      must not be null
     * @param requestTasteEvaluations must not be null
     * @throws RuntimeException failed to save evaluation
     */
    @Transactional
    public void registEvaluations(Long no, RequestTasteEvaluations requestTasteEvaluations)
        throws RuntimeException {
        evaluationsRepository.save(requestTasteEvaluations.toEntity(no));
    }

    public ResponseTasteInfo getEvaluations(Long no, Long foodsId) {
        return evaluationsRepository.findByNoAndFoodsId(no, foodsId)
            .map(Evaluations::toDTO).orElseThrow(NullPointerException::new);
    }
}
