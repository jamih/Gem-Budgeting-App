import { Component, OnInit } from '@angular/core';
import { ExpenseItemService } from '../services/expense-item.service';
import { ExpenseItem } from '../common/expense-item';
import { DatePipe } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements OnInit {

  expenseItems: ExpenseItem[] = [];
  newExpenseItem: ExpenseItem = new ExpenseItem(1, "", null, 0, "");

  constructor(private expenseItemService: ExpenseItemService, protected modalService: ModalService) { }
  
  ngOnInit(): void {
    this.listItems();
  }
  
  listItems() {
    this.expenseItemService.getItemList().subscribe(
      data => {
        this.expenseItems = data;
      }
    )
  }

  getFormattedDate(dateItem: Date) {
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate: String = datepipe.transform(dateItem, 'MMM dd, YYYY hh:mm a');

    return formattedDate;
  }

  getFormattedCategory(category: string) {
    let lowercase = category.toLowerCase();
    let firstLetter = lowercase.substring(0, 1);
    let restOfWord = lowercase.substring(1, lowercase.length);

    //TODO: add check for existing categories and color label and use or create new category

    return firstLetter.toUpperCase() + restOfWord;
  }

  createNewExpense() {
    
    // console.log(this.newExpenseItem);
    this.expenseItemService.createNewExpenseItem(this.newExpenseItem);
  }

}
