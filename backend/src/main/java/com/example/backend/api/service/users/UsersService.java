package com.example.backend.api.service.users;

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
public class UsersService{
    private final UsersRepository usersRepository;
    private final EvaluationsRepository evaluationsRepository;
    private final JwtService jwtService;

    public Users getUser(Long userNo){
        Users users = usersRepository.findByNo(userNo).orElseThrow(NullPointerException::new);
        users.updateRefreshToken(jwtService.createRefreshToken());
        return usersRepository.save(users);
    }
    
    // TODO : 취향 정보 받아서 유저 정보 업데이트 하는 로직 넣어야함
    public Users signUpUser(UsersSignUpRequest userSignUpRequest) {
        Users users = usersRepository.findByNo(userSignUpRequest.getNo()).orElseThrow(NullPointerException::new);
        users.updateUserNickname(userSignUpRequest.getNickname());
        users.authorizeUser();
        users.updateRefreshToken(jwtService.createRefreshToken());
        return usersRepository.save(users);
    }

    public Users signOutUser(Long userNo) {
        Users users = usersRepository.findByNo(userNo).orElseThrow(NullPointerException::new);
        users.updateRefreshToken(null);
        return usersRepository.save(users);
    }

    public Long checkNickname(String userNickname) {
        return usersRepository.countUsersByNickname(userNickname);
    }

    @Transactional
    public void registInitialEvaluations(Long usersNo, List<RequestTasteEvaluations> request) throws RuntimeException {
        for(RequestTasteEvaluations evaluations : request) {
            evaluationsRepository.save(evaluations.toEntity(usersNo));
        }
    }
}