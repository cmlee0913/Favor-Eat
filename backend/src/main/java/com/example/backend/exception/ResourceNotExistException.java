package com.example.backend.exception;

import com.example.backend.api.dto.ErrorMsgDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotExistException  extends RuntimeException {

    private ErrorMsgDTO errorMsgDTO;

    public ResourceNotExistException(String message) {
        super();
        errorMsgDTO = new ErrorMsgDTO("해당하는 리소스가 존재하지 않습니다.", message);
    }

    public ErrorMsgDTO getErrorMsgDTO() {
        return errorMsgDTO;
    }
}
