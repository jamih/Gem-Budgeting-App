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
    // let formattedDate: String = datepipe.transform(dateItem, 'MMM dd, YYYY hh:mm a');

    let formattedDate: String = datepipe.transform(dateItem, 'MMM dd, YYYY');

    return formattedDate;
  }

  createInternalFormattedDate(dateItem: Date) {
    let formattedDate: Date = new Date(dateItem);
    // let time: any = new Date().toLocaleTimeString();
    // formattedDate.setHours(time.split(':')[0]);
    // formattedDate.setMinutes(time.split(':')[1]);

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
    let item = this.newExpenseItem;
    item.dateCreated = this.createInternalFormattedDate(item.dateCreated);

    this.expenseItemService.createNewExpenseItem(item).subscribe(
      {
        next: response => {

          console.log(response);
          alert("Your expense has been added!");

          // reset form and reload tabel to load new item
          this.resetForm();
          this.reloadCurrentPage();
        },
        error: err => {
          alert(`There was an error: ${err.message}`);
        }
      }
    )
  }

  resetForm() {
    this.newExpenseItem.name = ''; this.newExpenseItem.amount = 0; 
    this.newExpenseItem.dateCreated = null; this.newExpenseItem.category = '';
  }

  reloadCurrentPage() {
    window.location.reload();
   }

}
