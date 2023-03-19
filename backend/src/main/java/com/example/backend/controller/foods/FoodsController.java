package com.example.backend.controller.foods;

import com.example.backend.dto.foods.response.ResponseFoodInfo;
import com.example.backend.service.FoodsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

}
