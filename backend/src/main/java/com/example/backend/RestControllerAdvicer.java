package com.example.backend;

import com.example.backend.api.dto.ErrorMsgDTO;
import com.example.backend.exception.ResourceNotExistException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class RestControllerAdvicer {
    @ExceptionHandler(ResourceNotExistException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorMsgDTO> handleNotFoundException(ResourceNotExistException e) {
        ErrorMsgDTO errorMsgDTO = e.getErrorMsgDTO();
        return new ResponseEntity<>(errorMsgDTO, HttpStatus.NOT_FOUND);
    }
}
