package com.budget.springbootbudget.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.budget.springbootbudget.entity.ExpenseItem;

@CrossOrigin("http://localhost:4200")
public interface ExpenseItemRepository extends JpaRepository<ExpenseItem, Long> {

}
