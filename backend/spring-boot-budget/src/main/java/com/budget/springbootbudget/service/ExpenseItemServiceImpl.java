package com.budget.springbootbudget.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.budget.springbootbudget.dao.ExpenseItemRepository;
import com.budget.springbootbudget.entity.ExpenseItem;

@Service
public class ExpenseItemServiceImpl implements ExpenseItemService {

    private ExpenseItemRepository repository;

    @Autowired
    public ExpenseItemServiceImpl(ExpenseItemRepository theExpenseItemRepository) {
        repository = theExpenseItemRepository;
    }

    @Override
    @Transactional
    public ExpenseItem save(ExpenseItem item) {
        return repository.save(item);
    }
}
