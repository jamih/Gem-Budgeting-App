package com.budget.springbootbudget.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.budget.springbootbudget.entity.ExpenseItem;
import com.budget.springbootbudget.service.ExpenseItemService;

@RestController
@RequestMapping("/api/expenseItems")
public class ExpenseItemController {

    private ExpenseItemService expenseItemService;

    @Autowired
    public ExpenseItemController(ExpenseItemService theExpenseItemService) {
        expenseItemService = theExpenseItemService;
    }

    @PostMapping("/item")
    public ExpenseItem addExpenseItem(@RequestBody ExpenseItem theItem) {

        ExpenseItem dbItem = expenseItemService.save(theItem);

        return dbItem;  
    }

}
