package com.example.backend.api.entity.users;

import com.example.backend.api.entity.diary.Diary;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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

    @OneToMany(mappedBy = "users")
    private List<Diary> diaries = new ArrayList<>();

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

    // 리프레쉬 토근 업데이트 메서드
    public void updateRefreshToken(String updateRefreshToken) {
        log.info("updateRefreshToken : " + updateRefreshToken);
        this.token = updateRefreshToken;
        log.info("토큰 업데이트 완료");
        log.info("this.token : " + this.token);
        // TODO : 업데이트된 값을 DB에 저장하는 로직 추가
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
