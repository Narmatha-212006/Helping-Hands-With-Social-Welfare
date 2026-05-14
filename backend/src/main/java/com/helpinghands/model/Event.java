package com.helpinghands.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "events")
@Data
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    
    @Column(columnDefinition="TEXT")
    private String description;
    
    private String eventDate;
    private String location;
    private Long ngoId;
}
