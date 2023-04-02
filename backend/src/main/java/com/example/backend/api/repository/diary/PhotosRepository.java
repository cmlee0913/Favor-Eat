package com.example.backend.api.repository.diary;

import com.example.backend.api.entity.diary.Photos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotosRepository extends JpaRepository<Photos, Long> {
    void deleteById(Long id);
}
