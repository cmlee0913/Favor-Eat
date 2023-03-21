package com.example.backend.api.domain.favorites.entity;

import java.io.Serializable;
import javax.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class FavoritesPK implements Serializable {
    @Column(name = "no")
    private Long no;
    @Column(name = "foods_id")
    private Long foodsId;
}
