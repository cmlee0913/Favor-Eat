package com.example.backend.api.repository.users;

import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.entity.users.Evaluations;
import java.util.Map;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluationsRepository extends JpaRepository<Evaluations, UsersFoodsID> {
    @Query("SELECT CAST(AVG(e.saltiness) AS float) AS saltiness, "
        + "CAST(AVG(e.sweetness) AS float) AS sweetness, "
        + "CAST(AVG(e.fatness) AS float) AS fatness, "
        + "CAST(AVG(e.spiciness) AS float) AS spiciness "
        + "FROM evaluations e WHERE e.no = :no")
    Map<String, Float> getAverageByNo(@Param("no") Long no);
}
