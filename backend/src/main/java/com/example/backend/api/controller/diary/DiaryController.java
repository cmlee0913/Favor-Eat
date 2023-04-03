package com.example.backend.api.controller.diary;

import com.example.backend.api.dto.diary.request.RequestDiaryAttribute;
import com.example.backend.api.dto.diary.response.ResponseDiaryAttribute;
import com.example.backend.api.service.diary.DiaryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Tag(name = "Diary", description = "식단일기 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/diary")
public class DiaryController {
    private final DiaryService diaryService;

    @GetMapping
    @Operation(summary = "식단 일기 전체 조회", description = "<strong>식단 일기 리스트</strong> 를 조회합니다.")
    private ResponseEntity<List<ResponseDiaryAttribute>> getDiaryList(@AuthenticationPrincipal User user) {
        return new ResponseEntity<>(diaryService.getDiaryList(Long.parseLong(user.getUsername())), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "해당 식단 일기 조회", description = "식단 일기 id로 <strong>제목</strong>, <strong>내용</strong>, <strong>기분</strong>, <strong>작성일자</strong>를 조회합니다.")
    private ResponseEntity<ResponseDiaryAttribute> getDiary(@AuthenticationPrincipal User user, @PathVariable Long id) {
        return new ResponseEntity<>(diaryService.getDiary(Long.parseLong(user.getUsername()), id), HttpStatus.OK);
    }

    @PostMapping
    @Operation(summary = "새로운 식단 일기 등록", description = "유저 id로 <strong>기본정보</strong>(이름, 양, 사진, 난이도), <strong>맛 정보</strong>(맵기, 달기, 짜기, 느끼), <strong>레시피 정보</strong>, <strong>재료 정보</strong>를 조회합니다.")
    private ResponseEntity<String> registDiary(@AuthenticationPrincipal User user,  @RequestBody RequestDiaryAttribute requestDiaryAttribute) {
        diaryService.registDiary(Long.parseLong(user.getUsername()), requestDiaryAttribute);
        return new ResponseEntity<>("일기 등록이 완료되었습니다.", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @Operation(summary = "해당 식단 일기 수정", description = "유저 no로 <strong>기본정보</strong>(이름, 양, 사진, 난이도), <strong>맛 정보</strong>(맵기, 달기, 짜기, 느끼), <strong>레시피 정보</strong>, <strong>재료 정보</strong>를 조회합니다.")
    private ResponseEntity<String> updateDiary(@AuthenticationPrincipal User user, @PathVariable Long id, @RequestBody RequestDiaryAttribute requestDiaryAttribute) {
        diaryService.updateDiary(Long.parseLong(user.getUsername()), id, requestDiaryAttribute);
        return new ResponseEntity<>("일기 수정이 완료되었습니다.", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "해당 식단 일기 삭제", description = "유저 id로 <strong>기본정보</strong>(이름, 양, 사진, 난이도), <strong>맛 정보</strong>(맵기, 달기, 짜기, 느끼), <strong>레시피 정보</strong>, <strong>재료 정보</strong>를 조회합니다.")
    private ResponseEntity<String> unregistDiary(@AuthenticationPrincipal User user, @PathVariable Long id) {
        diaryService.unregistDiary(Long.parseLong(user.getUsername()), id);
        return new ResponseEntity<>("일기 삭제가 완료되었습니다.", HttpStatus.OK);
    }
}
