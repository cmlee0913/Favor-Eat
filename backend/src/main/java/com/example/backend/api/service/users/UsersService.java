package com.example.backend.api.service.users;

import com.example.backend.api.dto.foods.response.ResponseTasteInfo;
import com.example.backend.api.dto.users.request.RequestTasteEvaluations;
import com.example.backend.api.dto.users.response.ResponseUserInfo;
import com.example.backend.api.entity.users.Role;
import com.example.backend.api.entity.users.Users;
import com.example.backend.api.repository.users.EvaluationsRepository;
import com.example.backend.api.repository.users.UsersRepository;
import java.util.List;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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
        Users users = usersRepository.findByNo(no).orElseThrow(NullPointerException::new);

        ResponseTasteInfo userTasteInfo = ResponseTasteInfo.builder()
            .salty(evaluationsRepository.getAverageSaltinessByNo(no))
            .spicy(evaluationsRepository.getAverageSpicinessByNo(no))
            .sweet(evaluationsRepository.getAverageSweetnessByNo(no))
            .oily(evaluationsRepository.getAverageFatnessByNo(no)).build();

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
     * @return
     * @throws RuntimeException failed to save evaluations
     */
    @Transactional
    public Users registInitialEvaluations(Long no,
        List<RequestTasteEvaluations> requestTasteEvaluations) throws RuntimeException {
        for (RequestTasteEvaluations tasteEvaluations : requestTasteEvaluations) {
            evaluationsRepository.save(tasteEvaluations.toEntity(no));
        }

        usersRepository.findByNo(no).ifPresent(users -> {
            users.updateRole(Role.USER);
            usersRepository.save(users);
        });

        return usersRepository.findByNo(no).orElseThrow(NullPointerException::new);
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
}
