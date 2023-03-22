package com.example.backend.api.dto.users.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UsersSignUpResponse {

    private Long no;
    private String email;
    private String nickname;
    private String token;


    @Builder
    public UsersSignUpResponse(Long no, String email, String nickname,
        String token) {
        this.no = no;
        this.email = email;
        this.nickname = nickname;
        this.token = token;
    }
}

