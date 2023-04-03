package com.example.backend.api.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ErrorMsgDTO {
    private String errorName;
    private String msg;

    @Builder
    public ErrorMsgDTO(String errorName, String msg) {
        this.errorName = errorName;
        this.msg = msg;
    }
}