package com.example.backend.api.controller.diary;

import com.example.backend.api.dto.diary.request.RequestDiary;
import com.example.backend.api.dto.diary.response.ResponseDiary;
import com.example.backend.api.entity.users.Users;
import com.example.backend.api.service.diary.DiaryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
    private ResponseEntity<List<ResponseDiary>> getDiaryList(@AuthenticationPrincipal Users users) {
        return new ResponseEntity<>(diaryService.getDiaryList(users.getNo()), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "해당 식단 일기 조회", description = "식단 일기 id로 <strong>제목</strong>, <strong>내용</strong>, <strong>기분</strong>, <strong>작성일자</strong>를 조회합니다.")
    private ResponseEntity<ResponseDiary> getDiary(@AuthenticationPrincipal Users users, @PathVariable Long id) {
        return new ResponseEntity<>(diaryService.getDiary(users.getNo(), id), HttpStatus.OK);
    }

    @PostMapping
    @Operation(summary = "새로운 식단 일기 등록", description = "유저 id로 <strong>기본정보</strong>(이름, 양, 사진, 난이도), <strong>맛 정보</strong>(맵기, 달기, 짜기, 느끼), <strong>레시피 정보</strong>, <strong>재료 정보</strong>를 조회합니다.")
    private ResponseEntity<String> registDiary(@AuthenticationPrincipal Users users,  @RequestBody RequestDiary requestDiary) {
        diaryService.registDiary(users.getNo(), requestDiary);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @Operation(summary = "해당 식단 일기 수정", description = "유저 no로 <strong>기본정보</strong>(이름, 양, 사진, 난이도), <strong>맛 정보</strong>(맵기, 달기, 짜기, 느끼), <strong>레시피 정보</strong>, <strong>재료 정보</strong>를 조회합니다.")
    private ResponseEntity<?> updateDiary(@AuthenticationPrincipal Users users, @PathVariable Long id, @RequestBody RequestDiary requestDiary) {
        diaryService.updateDiary(users.getNo(), id, requestDiary);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "해당 식단 일기 삭제", description = "유저 id로 <strong>기본정보</strong>(이름, 양, 사진, 난이도), <strong>맛 정보</strong>(맵기, 달기, 짜기, 느끼), <strong>레시피 정보</strong>, <strong>재료 정보</strong>를 조회합니다.")
    private ResponseEntity<?> unregistDiary(@AuthenticationPrincipal Users users, @PathVariable Long id) {
        diaryService.unregistDiary(users.getNo(), id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
