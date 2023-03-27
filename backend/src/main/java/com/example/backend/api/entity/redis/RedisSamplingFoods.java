package com.example.backend.api.entity.redis;

import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

@Getter
@RedisHash("sampling_foods")
public class RedisSamplingFoods {
    @Id
    private Long no;
    @Indexed
    private Integer index;
    private Long foodsId;
    private String name;
    private String image;

    @Builder
    public RedisSamplingFoods(Long no, Integer index, Long foodsId, String name, String image) {
        this.no = no;
        this.index = index;
        this.foodsId = foodsId;
        this.name = name;
        this.image = image;
    }

}
