package com.example.backend.api.service.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.backend.api.entity.users.Users;
import com.example.backend.api.repository.users.UsersRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Getter
@Slf4j
public class JwtService {

    @Value("${jwt.secretKey}")
    private String secretKey;

    @Value("${jwt.access.expiration}")
    private Long accessTokenExpirationPeriod; // 액세스 토큰 만료시간

    @Value("${jwt.refresh.expiration}")
    private Long refreshTokenExpirationPeriod; // 리프레쉬 토큰 만료시간

    @Value("${jwt.access.header}")
    private String accessHeader;

    @Value("${jwt.refresh.header}")
    private String refreshHeader;

    /**
     * JWT의 Subject와 Claim으로 email 사용 -> 클레임의 name을 "email"으로 설정
     * JWT의 헤더에 들어오는 값 : 'Authorization(Key) = Bearer {토큰} (Value)' 형식
     */
    private static final String ACCESS_TOKEN_SUBJECT = "AccessToken";
    private static final String REFRESH_TOKEN_SUBJECT = "RefreshToken";
    private static final String EMAIL_CLAIM = "email";
    private static final String NICKNAME_CLAIM = "nickname";
    private static final String ROLE_CLAIM = "role";
    private static final String BEARER = "Bearer ";

    private final UsersRepository usersRepository;

    /**
     * create AccessToken
     *
     * @param email must not be null
     * @param nickname must not be null
     * @return AccessToken
     */
    public String createAccessToken(String email, String nickname, String role) {
        Date now = new Date();
        return JWT.create() // JWT 토큰을 생성하는 빌더 반환 (페이로드 부분 생성)
            .withSubject(ACCESS_TOKEN_SUBJECT) // JWT의 Subject 지정 -> AccessToken이므로 AccessToken
            .withExpiresAt(new Date(now.getTime() + accessTokenExpirationPeriod)) // 토큰 만료 시간 설정
            
            // 이메일, 닉네임 클레임 추가
            .withClaim(EMAIL_CLAIM, email)
            .withClaim(NICKNAME_CLAIM, nickname)
            .withClaim(ROLE_CLAIM, role)
            .sign(Algorithm.HMAC512(secretKey)); // HMAC512 알고리즘 사용, application-jwt.yml에서 지정한 secret 키로 암호화
    }

    /**
     * create RefreshToken
     *
     * @return RefreshToken
     */
    public String createRefreshToken() {
        Date now = new Date();
        return JWT.create()
            .withSubject(REFRESH_TOKEN_SUBJECT)
            .withExpiresAt(new Date(now.getTime() + refreshTokenExpirationPeriod))
            .sign(Algorithm.HMAC512(secretKey));
    }

    /**
     * AccessToken 헤더에 실어서 보내기
     */
    public void sendAccessToken(HttpServletResponse response, String accessToken) {
        response.setStatus(HttpServletResponse.SC_OK); // 200

        response.setHeader(accessHeader, accessToken); // 설정한 헤더에 토큰 담아서 보냄
        log.info("재발급된 Access Token : {}", accessToken);
    }

    /**
     * AccessToken + RefreshToken 헤더에 실어서 보내기
     */
    public void sendAccessAndRefreshToken(HttpServletResponse response, String accessToken, String refreshToken) {
        response.setStatus(HttpServletResponse.SC_OK); // 200

        setAccessTokenHeader(response, accessToken); // 설정한 헤더에 토큰 담아서 보냄
        setRefreshTokenHeader(response, refreshToken);
        log.info("Access Token, Refresh Token 헤더 설정 완료");
    }

    /**
     * extract RefreshToken from Header
     *
     * @return RefreshToken
     */
    public Optional<String> extractRefreshToken(HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader(refreshHeader)) // 옵셔널 메서드, 만약 null이 아니라면
            .filter(refreshToken -> refreshToken.startsWith(BEARER)) // 'Bearer ' 부분을 필터링하고
            .map(refreshToken -> refreshToken.replace(BEARER, "")); // '' 으로 대체
    }

    /**
     * extract AccessToken from Header
     *
     * @return AccessToken
     */
    public Optional<String> extractAccessToken(HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader(accessHeader)) // 옵셔널 메서드, 만약 null이 아니라면
            .filter(refreshToken -> refreshToken.startsWith(BEARER)) // 'Bearer ' 부분을 필터링하고
            .map(refreshToken -> refreshToken.replace(BEARER, "")); // '' 으로 대체
    }

    /**
     * Extracting Email from an AccessToken
     * Create validator with JWT.require() before extraction
     *
     * @return return email if valid, otherwise an empty Optional object
     */
    public Optional<String> extractEmail(String accessToken) {
        try {
            // 토큰 유효성 검사하는 데에 사용할 알고리즘이 있는 JWT verifier builder 반환
            return Optional.ofNullable(JWT.require(Algorithm.HMAC512(secretKey)) // 옵셔널 메서드, 만약 null이 아니라면
                .build() // 반환된 빌더로 JWT verifier 생성
                .verify(accessToken) // accessToken을 검증하고 유효하지 않다면 예외 발생
                .getClaim(EMAIL_CLAIM) // claim(Email) 가져오기
                .asString());
        } catch (Exception e) {
            log.error("액세스 토큰이 유효하지 않습니다.");
            return Optional.empty();
        }
    }

    /**
     * AccessToken 헤더 설정
     */
    public void setAccessTokenHeader(HttpServletResponse response, String accessToken) {
        response.setHeader(accessHeader, accessToken);
    }

    /**
     * RefreshToken 헤더 설정
     */
    public void setRefreshTokenHeader(HttpServletResponse response, String refreshToken) {
        response.setHeader(refreshHeader, refreshToken);
    }

    /**
     * RefreshToken DB 저장(업데이트)
     *
     * @param email must not be null
     * @param refreshToken must not be null
     * @throws Exception can't find user
     */
    public void updateRefreshToken(String email, String refreshToken) throws Exception{
        log.info("refreshToken : " + refreshToken);
        log.info("email : " + email);
        usersRepository.findByEmail(email).orElseThrow(() -> new Exception("일치하는 회원이 없습니다."))
            .updateRefreshToken(refreshToken);
//            .ifPresentOrElse(
//                user -> user.updateRefreshToken(refreshToken),
//                () -> throw new Exception("일치하는 회원이 없습니다.")
//            );
    }

    /**
     * check token
     *
     * @param token must not be null
     * @return true if token is valid, otherwise false
     */
    public boolean isTokenValid(String token) {
        try {
            JWT.require(Algorithm.HMAC512(secretKey)).build().verify(token);
            return true;
        } catch (Exception e) {
            log.error("유효하지 않은 토큰입니다. {}", e.getMessage());
            return false;
        }
    }
}
