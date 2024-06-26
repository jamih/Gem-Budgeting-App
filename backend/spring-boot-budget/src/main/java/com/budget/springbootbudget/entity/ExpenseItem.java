package com.budget.springbootbudget.entity;

import java.util.Date;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="expense_item")
@Data
public class ExpenseItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id")
    private Long user_id;

    @Column(name = "name")
    private String name;
    
    @Column(name = "date")
    private Date dateCreated;

    @Column(name = "amount")
    private Float amount;
  
    @Column(name = "category")
    private String category;

}
