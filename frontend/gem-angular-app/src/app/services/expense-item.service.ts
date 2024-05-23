import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseItem } from '../common/expense-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseItemService {

  private baseUrl = 'http://localhost:8080/api/expenseItems';

  constructor(private httpClient: HttpClient) { }

  getItemList(): Observable<ExpenseItem[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.expenseItems)
    );
  }

  createNewExpenseItem(item: ExpenseItem): Observable<any> {
    // console.log("Created new Expense item from service class");
    let addUrl = this.baseUrl + '/item';

    return this.httpClient.post<ExpenseItem>(addUrl, item);
  }
}

interface GetResponse {
  _embedded: {
    expenseItems: ExpenseItem[];
  }
}
