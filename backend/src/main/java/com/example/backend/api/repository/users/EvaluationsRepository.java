package com.example.backend.api.repository.users;

import com.example.backend.api.entity.idclass.UsersFoodsID;
import com.example.backend.api.entity.users.Evaluations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluationsRepository extends JpaRepository<Evaluations, UsersFoodsID> {
    @Query("SELECT AVG(e.saltiness) FROM evaluations e WHERE e.no = :no")
    Float getAverageSaltinessByNo(@Param("no") Long no);
    @Query("SELECT AVG(e.sweetness) FROM evaluations e WHERE e.no = :no")
    Float getAverageSweetnessByNo(@Param("no") Long no);
    @Query("SELECT AVG(e.spiciness) FROM evaluations e WHERE e.no = :no")
    Float getAverageSpicinessByNo(@Param("no") Long no);
    @Query("SELECT AVG(e.fatness) FROM evaluations e WHERE e.no = :no")
    Float getAverageFatnessByNo(@Param("no") Long no);
}
