package com.example.backend.api.service.diary;

import com.example.backend.api.dto.diary.request.RequestDiaryAttribute;
import com.example.backend.api.dto.diary.request.RequestPhotosAttribute;
import com.example.backend.api.dto.diary.response.ResponseDiaryAttribute;
import com.example.backend.api.entity.diary.Diary;

import com.example.backend.api.repository.diary.DiaryRepository;
import com.example.backend.api.repository.diary.PhotosRepository;
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

    public List<ResponseDiaryAttribute> getDiaryList(Long no) {
        return diaryRepository.findByNo(no).stream()
            .map(Diary::toDTO)
            .collect(Collectors.toList());
    }

    public ResponseDiaryAttribute getDiary(Long no, Long id) {
        return getDiaryEntity(no, id).toDTO();
    }

    @Transactional
    public void registDiary(Long no, RequestDiaryAttribute requestDiaryAttribute) {
        Long savedDiaryId = diaryRepository.save(requestDiaryAttribute.toEntity(no)).getId();
        List<RequestPhotosAttribute> requestPhotosAttribute = requestDiaryAttribute.getRequestPhotosAttributeList();

        if (requestPhotosAttribute != null) {
            requestPhotosAttribute.forEach(requestPhotos -> {
                photosRepository.save(requestPhotos.toEntity(savedDiaryId));
            });
        }
    }

    @Transactional
    public void updateDiary(Long no, Long id, RequestDiaryAttribute requestDiaryAttribute) {
        getDiaryEntity(no, id).updateDiary(requestDiaryAttribute);
    }

    @Transactional
    public void unregistDiary(Long no, Long id) {
        diaryRepository.delete(getDiaryEntity(no, id));
    }

    private Diary getDiaryEntity(Long no, Long id) {
        return diaryRepository.findByNoAndId(no, id)
            .orElseThrow(RuntimeException::new);
    }
}
