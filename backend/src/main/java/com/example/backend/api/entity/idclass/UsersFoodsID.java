package com.example.backend.api.entity.idclass;

import java.io.Serializable;
import javax.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class UsersFoodsID implements Serializable {
    @Column(name = "no")
    private Long no;
    @Column(name = "foods_id")
    private Long foodsId;
}
