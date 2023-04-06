package com.example.backend.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI(@Value("${springdoc.version}") String springdocVersion) {
        Info info = new Info()
            .title("D108 - OMZ")
            .version(springdocVersion)
            .description("SSAFY 특화 프로젝트 D108팀 OMZ의 Favoreat API 입니다.");

        return new OpenAPI()
            .addSecurityItem(new SecurityRequirement().addList("Authorization"))
            .components(new Components().addSecuritySchemes("Authorization",
                new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer")
                    .bearerFormat("JWT")))//JWT 전역 설정을 위해 추가
            .info(info);
    }
}
