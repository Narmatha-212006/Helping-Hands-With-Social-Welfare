package com.helpinghands.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "requests")
@Data
public class HelpRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long userId;
    private String title;
    
    @Column(columnDefinition="TEXT")
    private String description;
    
    private String location;
    private String status;
    private Boolean isEmergency;
}
