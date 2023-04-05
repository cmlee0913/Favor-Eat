package com.example.backend.handler.exception;

import com.example.backend.exception.ResourceNotExistException;
import java.sql.SQLException;
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
    public ResponseEntity<?> handleResourceNotExistException(ResourceNotExistException e) {
        log.error(e.getMessage());
        e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<?> handleRuntimeException(RuntimeException e) {
        log.error("실행 중 에러 발생");
        e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(SQLException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<?> handleSQLException(SQLException e) {
        log.error("DB작업 중 에러 발생: " + e.getCause());
        e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
