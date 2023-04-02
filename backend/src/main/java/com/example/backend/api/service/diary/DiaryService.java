package com.example.backend.api.service.diary;

import com.example.backend.api.dto.diary.request.RequestDiary;
import com.example.backend.api.dto.diary.response.ResponseDiary;
import com.example.backend.api.entity.diary.Diary;

import com.example.backend.api.repository.diary.DiaryRepository;
import com.example.backend.api.repository.diary.PhotosRepository;
import com.example.backend.exception.ResourceNotExistException;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class DiaryService {
    private final DiaryRepository diaryRepository;
    private final PhotosRepository photosRepository;

    public List<ResponseDiary> getDiaryList(Long userNo) {
        return diaryRepository.findByNo(userNo).stream()
            .map(Diary::toDTO)
            .collect(Collectors.toList());
    }

    public ResponseDiary getDiary(Long userNo, Long id) {
        return getDiaryEntity(userNo, id).toDTO();
    }

    @Transactional
    public void registDiary(Long userNo, RequestDiary requestDiary) {
        Long savedDiaryId = diaryRepository.save(requestDiary.toEntity(userNo)).getId();

        requestDiary.getRequestPhotosList()
            .forEach(requestPhotos -> {
                log.info("" + savedDiaryId);
                log.info(requestPhotos.getOriginal_name());
                photosRepository.save(requestPhotos.toEntity(savedDiaryId));
            });
    }

    @Transactional
    public void updateDiary(Long userNo, Long id, RequestDiary requestDiary) {
        getDiaryEntity(userNo, id).updateDiary(requestDiary);
    }

    @Transactional
    public void unregistDiary(Long userNo, Long id) {
        diaryRepository.delete(getDiaryEntity(userNo, id));
        // photosRepository.deleteById(id);
    }

    private Diary getDiaryEntity(Long userNo, Long id) {
        return diaryRepository.findByNoAndId(userNo, id)
            .orElseThrow(() -> new ResourceNotExistException("일기 목록에 존재하지 않는 일기입니다."));
    }
}
