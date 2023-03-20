package com.example.backend.domain.users.repository;

import com.example.backend.domain.users.entity.Users;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

    Optional<Users> findByNo(Long no);
    Optional<Users> findByEmail(String email);
    Optional<Users> findByNickname(String nickname);
    Optional<Users> findByToken(String refreshToken);
    Long countUsersByNickname(String userNickname);
}
