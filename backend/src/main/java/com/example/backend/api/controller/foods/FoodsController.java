package com.example.backend.api.controller.foods;

import com.example.backend.api.dto.foods.response.ResponseBasicFoodInfo;
import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import com.example.backend.api.dto.foods.response.ResponseRecommendFood;
import com.example.backend.api.service.foods.FoodsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Foods", description = "음식 API")
@RestController
@RequestMapping("/foods")
@RequiredArgsConstructor
public class FoodsController {

    private final FoodsService foodsService;

    @GetMapping("/{id}")
    @Operation(summary = "음식 정보 조회", description = "음식 id로 <strong>기본정보</strong>(이름, 양, 사진, 난이도), <strong>맛 정보</strong>(맵기, 달기, 짜기, 느끼), <strong>레시피 정보</strong>, <strong>재료 정보</strong>를 조회합니다.")
    private ResponseEntity<ResponseFoodInfo> getFoodInfo(@AuthenticationPrincipal User users,
        @PathVariable Long id) {

        return new ResponseEntity<>(
            foodsService.getFoodInfo(Long.parseLong(users.getUsername()), id), HttpStatus.OK);

    }

    @GetMapping("/list/{index}")
    @Operation(summary = "취향 분석 음식 목록 전송", description = "<strong>취향 분석</strong> 시 필요한 음식의 목록을 <strong>100개씩</strong> 전송한다.")
    private ResponseEntity<List<ResponseBasicFoodInfo>> getSamplingFoodList(
        @PathVariable Long index) {
        return new ResponseEntity<>(foodsService.getSamplingFoodList(index), HttpStatus.OK);
    }

    @GetMapping("/favor")
    @Operation(summary = "음식 즐겨찾기 조회", description = "사용자의 <strong>즐겨찾기 목록을 조회</strong>합니다.")
    private ResponseEntity<List<ResponseBasicFoodInfo>> getFavorFoodList(
        @AuthenticationPrincipal User users) {
        return new ResponseEntity<>(
            foodsService.getFavorFoodList(Long.parseLong(users.getUsername())), HttpStatus.OK);
    }

    @PostMapping("/favor/{id}")
    @Operation(summary = "음식 즐겨찾기 등록", description = "음식 id를 <strong>즐겨찾기 목록에 등록</strong>합니다.")
    private ResponseEntity<?> registFavorFood(@AuthenticationPrincipal User users,
        @PathVariable Long id) {
        if (foodsService.registFavorFood(Long.parseLong(users.getUsername()), id)) {
            return new ResponseEntity<>(id + " : 즐겨찾기 등록 성공", HttpStatus.OK);
        } else {
            return new ResponseEntity<>(id + " : 즐겨찾기 등록 실패", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/favor/{id}")
    @Operation(summary = "음식 즐겨찾기 해제", description = "음식 id를 <strong>즐겨찾기 목록에서 해제</strong>합니다.")
    private ResponseEntity<?> unregistFavorFood(@AuthenticationPrincipal User users,
        @PathVariable Long id) {
        foodsService.unregistFavorFood(Long.parseLong(users.getUsername()), id);
        return new ResponseEntity<>(id + " : 즐겨찾기 해제 성공", HttpStatus.OK);
    }

    @PostMapping("/nonfavor/{id}")
    @Operation(summary = "음식 관심없음 등록", description = "음식 id를 <strong>관심없음 목록에 등록</strong>합니다.")
    private ResponseEntity<?> registNonFavorFood(@AuthenticationPrincipal User users,
        @PathVariable Long id) {
        if (foodsService.registNonFavorFood(Long.parseLong(users.getUsername()), id)) {
            return new ResponseEntity<>(id + " : 관심없음 등록 성공", HttpStatus.OK);
        } else {
            return new ResponseEntity<>(id + " : 관심없음 등록 실패", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/recommend")
    @Operation(summary = "추천 음식 목록 조회", description = "추천 음식 목록을 조회합니다.")
    private ResponseEntity<List<ResponseRecommendFood>> getRecommandFoodList(
        @AuthenticationPrincipal User users) {
        return new ResponseEntity<>(
            foodsService.getRecommendFoodList(Long.parseLong(users.getUsername())), HttpStatus.OK);
    }

}