package com.example.backend.dto.users;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UsersSignUpRequest {
    private Long no;
    private String nickname;
    
    // TODO : 취향분석 정보 받아오기
}

