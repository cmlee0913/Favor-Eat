package com.example.backend.api.entity.users;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Slf4j
@Entity
@Builder
@Table(name = "users")
@AllArgsConstructor
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no")
    private Long no;

    @Column(name="email")
    private String email; // 이메일
    @Column(name="token")
    private String token; // 리프레쉬 토큰
    @Column(name="alarm")
    private boolean alarm; // 알람 설정 유무
    @Column(name="nickname")
    private String nickname; // 닉네임

    @Enumerated(EnumType.STRING)
    private Role role; // 유저가 가입했는지 유무

    @Builder
    public Users(String userNickname, String userEmail, String userRefreshToken, Role userRole) {
        this.nickname = userNickname;
        this.email = userEmail;
        this.token = userRefreshToken;
        this.role = userRole;
    }

    public void updateUserNickname(String updateNickname){
        this.nickname = updateNickname;
    }

    // 유저 권한 설정 메소드
    public void authorizeUser() {
        this.role = Role.USER;
    }

    public void updateRefreshToken(String updateRefreshToken) {
        this.token = updateRefreshToken;
    }

    /**
     * update user's role
     *
     * @param userRole must not be null
     */
    public void updateRole(Role userRole) {
        this.role = userRole;
    }
}
