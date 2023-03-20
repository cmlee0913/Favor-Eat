package com.example.backend.service;

import com.example.backend.domain.users.entity.Users;
import com.example.backend.domain.users.repository.UsersRepository;
import com.example.backend.dto.users.UsersSignUpRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersService{
    private final UsersRepository usersRepository;
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
}

