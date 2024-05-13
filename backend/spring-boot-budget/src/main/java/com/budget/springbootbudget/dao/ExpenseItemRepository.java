package com.budget.springbootbudget.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.budget.springbootbudget.entity.ExpenseItem;

public interface ExpenseItemRepository extends JpaRepository<ExpenseItem, Long> {

}
