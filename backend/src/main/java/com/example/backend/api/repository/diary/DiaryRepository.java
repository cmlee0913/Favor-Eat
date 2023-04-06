package com.example.backend.api.repository.diary;

import com.example.backend.api.entity.diary.Diary;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {

    List<Diary> findByNo(Long userNo);
    Optional<Diary> findByNoAndId(Long userNo, Long id);
}
