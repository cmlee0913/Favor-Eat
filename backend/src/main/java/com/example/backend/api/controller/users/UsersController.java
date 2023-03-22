package com.example.backend.api.controller.users;

import com.example.backend.api.entity.users.Users;
import com.example.backend.api.dto.users.request.RequestTasteEvaluations;
import com.example.backend.api.service.users.UsersService;
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

@Slf4j
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UsersController {
    private final UsersService usersService;

    // TODO : 취향 분석 정보 다 받아온 후 DB에 업데이트
//    @PostMapping("/signup")
//    public ResponseEntity<?> signUpUser(@RequestBody UsersSignUpRequest userSignUpRequest){
//        if (usersService.checkNickname(userSignUpRequest.getNickname()) == 0){
//            usersService.signUpUser(userSignUpRequest);
//            return new ResponseEntity<>("회원 정보 등록 성공", HttpStatus.valueOf(200));
//        } else {
//            return new ResponseEntity<>("중복된 닉네임입니다.", HttpStatus.valueOf(400));
//        }
//    }

    @PutMapping("/signout/{userNo}")
    public ResponseEntity<String> signOutUser(@PathVariable Long userNo) {
        if (usersService.signOutUser(userNo).getToken().equals(null)){
            return new ResponseEntity<>("signOut 성공", HttpStatus.valueOf(200));
        } else {
            return new ResponseEntity<>("signOut 실패", HttpStatus.valueOf(400));
        }
    }

    @PostMapping()
    public ResponseEntity<?> registInitialEvaluations(@AuthenticationPrincipal User users, @RequestBody List<RequestTasteEvaluations> request) {
        try {
            usersService.registInitialEvaluations(Long.parseLong(users.getUsername()), request);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
