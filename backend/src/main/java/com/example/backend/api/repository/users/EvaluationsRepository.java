package com.example.backend.api.repository.users;

import com.example.backend.api.entity.users.Evaluations;
import com.example.backend.api.entity.idclass.UsersFoodsID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluationsRepository extends JpaRepository<Evaluations, UsersFoodsID> {
}
