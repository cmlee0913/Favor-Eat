package com.example.backend.api.controller.foods;

import com.example.backend.api.dto.foods.response.ResponseFoodInfo;
import com.example.backend.api.service.foods.FoodsService;
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

@RestController
@RequestMapping("/foods")
@RequiredArgsConstructor
public class FoodsController {
    private final FoodsService foodsService;

    @GetMapping("/{id}")
    private ResponseEntity<ResponseFoodInfo> getFoodInfo(@PathVariable Long id) {
        return new ResponseEntity<>(foodsService.getFoodInfo(id), HttpStatus.OK);
    }

    @PostMapping("/favor/{id}")
    private ResponseEntity<?> registFavorFood(@AuthenticationPrincipal User users, @PathVariable Long id){
        if(foodsService.registFavorFood(Long.parseLong(users.getUsername()), id)){
            return new ResponseEntity<>(id+" : 즐겨찾기 등록 성공", HttpStatus.OK);
        }else{
            return new ResponseEntity<>(id+" : 즐겨찾기 등록 실패", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/favor/{id}")
    private ResponseEntity<?> unregistFavorFood(@AuthenticationPrincipal User users, @PathVariable Long id){
        try{
            foodsService.unregistFavorFood(Long.parseLong(users.getUsername()), id);
            return new ResponseEntity<>(id+" : 즐겨찾기 해제 성공", HttpStatus.OK);
        }catch (RuntimeException e){
            return new ResponseEntity<>(id+" : 즐겨찾기 해제 실패", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}