package com.example.backend.api.service.users;

import com.example.backend.api.entity.users.Role;
import com.example.backend.api.entity.users.Users;
import com.example.backend.api.repository.users.EvaluationsRepository;
import com.example.backend.api.repository.users.UsersRepository;
import com.example.backend.api.dto.users.request.RequestTasteEvaluations;
import com.example.backend.api.dto.users.request.UsersSignUpRequest;
import com.example.backend.api.service.jwt.JwtService;
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
    private final JwtService jwtService;

    /**
     * save refresh token
     *
     * @param no must not be null
     * @return entity with No equal to given value
     * @throws NullPointerException can't find user
     */
    @Transactional
    public Users getUser(Long no) {
        Users users = usersRepository.findByNo(no).orElseThrow(NullPointerException::new);
        users.updateRefreshToken(jwtService.createRefreshToken());
        return usersRepository.save(users);
    }

    // TODO : 취향 정보 받아서 유저 정보 업데이트 하는 로직 넣어야함
    @Transactional
    public Users signUpUser(UsersSignUpRequest userSignUpRequest) {
        Users users = usersRepository.findByNo(userSignUpRequest.getNo())
            .orElseThrow(NullPointerException::new);
        users.updateUserNickname(userSignUpRequest.getNickname());
        users.authorizeUser();
        users.updateRefreshToken(jwtService.createRefreshToken());
        return usersRepository.save(users);
    }

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

    public Long checkNickname(String userNickname) {
        return usersRepository.countUsersByNickname(userNickname);
    }

    /**
     * save evaluations and change user's role
     *
     * @param no                 must not be null
     * @param requestTasteEvaluations must not be null
     * @throws RuntimeException failed to save evaluations
     */
    @Transactional
    public void registInitialEvaluations(Long no,
        List<RequestTasteEvaluations> requestTasteEvaluations) throws RuntimeException {
        for (RequestTasteEvaluations evaluations : requestTasteEvaluations) {
            evaluationsRepository.save(evaluations.toEntity(no));
        }

        usersRepository.findByNo(no).ifPresent(users -> {
            users.updateRole(Role.USER);
            usersRepository.save(users);
        });
    }

    /**
     * remove refresh token
     *
     * @param no                 must not be null
     * @param requestTasteEvaluations must not be null
     * @throws RuntimeException failed to save evaluation
     */
    @Transactional
    public void registEvaluations(long no, RequestTasteEvaluations requestTasteEvaluations)
        throws RuntimeException {
        evaluationsRepository.save(requestTasteEvaluations.toEntity(no));
    }
}
