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
  private addUrl = 'http://localhost:8080/api/expenseItems/addItem';

  constructor(private httpClient: HttpClient) { }

  getItemList(): Observable<ExpenseItem[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.expenseItems)
    );
  }

  createNewExpenseItem(item: ExpenseItem): Observable<any> {
    return this.httpClient.post<ExpenseItem>(this.addUrl, item);
  }
}

interface GetResponse {
  _embedded: {
    expenseItems: ExpenseItem[];
  }
}
