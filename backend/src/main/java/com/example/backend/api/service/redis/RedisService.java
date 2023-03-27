package com.example.backend.api.service.redis;

import com.example.backend.api.entity.redis.RedisSamplingFoods;
import java.util.List;
import com.example.backend.api.entity.foods.SamplingFoods;
import com.example.backend.api.repository.foods.SamplingFoodsRepository;
import com.example.backend.api.repository.redis.RedisRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class RedisService {
    private final RedisRepository redisRepository;
    private final SamplingFoodsRepository samplingFoodsRepository;

    @Transactional
    public void saveFoodsList(Long no) {
        log.info("saveFoodsList()호출");
        List<SamplingFoods> samplingFoodsList = samplingFoodsRepository.findAll();
        Integer index = 1;

        for(SamplingFoods samplingFoods : samplingFoodsList){
            redisRepository.save(RedisSamplingFoods.builder()
                .no(no)
                .index(index++)
                .foodsId(samplingFoods.getId())
                .name(samplingFoods.getName())
                .image(samplingFoods.getImage()).build());
        }
    }
}
