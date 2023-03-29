package com.example.backend.api.controller.users;

import com.example.backend.api.dto.users.request.RequestTasteEvaluations;
import com.example.backend.api.service.users.UsersService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Users", description = "사용자 API")
@Slf4j
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UsersController {

    private final UsersService usersService;

    @Operation(summary = "로그아웃", description = "사용자의 <strong>즐겨찾기 목록을 조회</strong>합니다.")
    @PutMapping("/signout/{no}")
    public ResponseEntity<String> signOutUser(@PathVariable Long no) {
        if (usersService.signOutUser(no).getToken() == null) {
            return new ResponseEntity<>("signOut 성공", HttpStatus.valueOf(200));
        } else {
            return new ResponseEntity<>("signOut 실패", HttpStatus.valueOf(400));
        }
    }

    @Operation(summary = "초기 맛 평가 등록", description = "최소 5개 이상 <strong>초기 맛 평가 정보</strong>(맵기, 달기, 짜기, 느끼)를 등록합니다. <strong>사용자 ROLE</strong>을 업데이트합니다.")
    @PostMapping()
    public ResponseEntity<?> registInitialEvaluations(@AuthenticationPrincipal User users,
        @RequestBody List<RequestTasteEvaluations> requestTasteEvaluations) {
        try {
            usersService.registInitialEvaluations(Long.parseLong(users.getUsername()),
                requestTasteEvaluations);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/taste")
    @Operation(summary = "맛 평가 등록", description = "<strong>맛 평가 정보(맵기, 달기, 짜기, 느끼)</strong>를 등록합니다.")
    public ResponseEntity<?> registEvaluations(@AuthenticationPrincipal User users,
        @RequestBody RequestTasteEvaluations requestTasteEvaluations) {
        try {
            usersService.registEvaluations(Long.parseLong(users.getUsername()),
                requestTasteEvaluations);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
