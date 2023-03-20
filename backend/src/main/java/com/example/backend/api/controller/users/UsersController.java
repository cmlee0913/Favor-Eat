package com.example.backend.api.controller.users;

import com.example.backend.api.service.users.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
