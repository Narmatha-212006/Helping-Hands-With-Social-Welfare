package com.helpinghands.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "contact_messages")
@Data
public class ContactMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    private String subject;
    
    @Column(columnDefinition="TEXT")
    private String message;
}
