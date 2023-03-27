package com.example.backend.api.repository.redis;

import com.example.backend.api.entity.redis.RedisSamplingFoods;
import org.springframework.data.repository.CrudRepository;

public interface RedisRepository extends CrudRepository<RedisSamplingFoods, Long> {

}
