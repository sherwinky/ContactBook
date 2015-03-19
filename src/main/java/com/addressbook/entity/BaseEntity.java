package com.addressbook.entity;

import java.time.LocalDateTime;
import java.util.Date;

/**
 * Created by Stev.L on 03/14/15.
 */
public class BaseEntity {
    private Long id;
    private LocalDateTime dateAdded;
    private LocalDateTime dateChanged;

    public Long getId(){
        return id;
    }
    public void setId(Long val){
        id=val;
    }

    public LocalDateTime getDateAdded()
    {
        return dateAdded;
    }
    public void setDateAdded(LocalDateTime val){
        dateAdded = val;
    }

    public LocalDateTime getDateChanged(){
        return dateChanged;
    }
    public void setDateChanged(LocalDateTime val){
        dateChanged = val;
    }
}
