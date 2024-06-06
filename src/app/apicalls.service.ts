import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APICallsService {

  constructor(private http: HttpClient) { }


  getMonthlyRevenueBreakdown(): Observable <any>{
    return this.http.get("http://localhost:3000/MonthlyRevenueData");
  }

  getTopSellingProductList():Observable<any>{
    return this.http.get("http://localhost:3000/TopSellingProducts");
  }

  getDatafromfireBase():Observable<any>{
    return this.http.get("http://localhost:3000/getData");
  }

}
