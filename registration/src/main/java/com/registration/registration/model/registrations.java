package com.registration.registration.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name="registrations")


public class registrations {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    @Column(name="Name")
    private String name;
    @Column(name="Phonenumber")
    private Long phonenumber;
    @Column(name="Mail")
    private String mail;
    @Column(name="Password")
    private String password;
    @Column(name="Feedback")
    private String feedback;

}