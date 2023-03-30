package com.example.backend.api.dto.users.response;

import com.example.backend.api.dto.foods.response.ResponseTasteInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ResponseUserInfo {

    Boolean alarm;
    ResponseTasteInfo responseTasteInfo;

    @Builder
    public ResponseUserInfo(Boolean alarm, ResponseTasteInfo responseTasteInfo) {
        this.alarm = alarm;
        this.responseTasteInfo = responseTasteInfo;
    }
}
