package com.example.backend.api.repository.foods.recommends;

import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.entity.foods.recommends.Recommends;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendsRepository extends JpaRepository<Recommends, UsersFoodsID> {
    List<Recommends> findByNo(Long no);
}
