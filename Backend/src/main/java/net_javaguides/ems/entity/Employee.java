package net_javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//Using Lombok to reduce BoilerPlate code in typical Java Application
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
//Annotation mapping to table in DB Persistence***
@Table(name = "employees")
public class Employee {
    //Configuring PK of JPA entity
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
}
