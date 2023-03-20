package com.example.backend.api.domain.users.oauth;

import java.util.Map;

//    TODO : 구글 로그인 넣으면 추가할 것
public class GoogleOAuth2UserInfo extends OAuth2UserInfo {

    public GoogleOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        return (String) attributes.get("sub");
    }

    @Override
    public String getNickname() {
        return (String) attributes.get("name");
    }
    @Override
    public String getEmail() {
        return (String) attributes.get("email");
    }
}

