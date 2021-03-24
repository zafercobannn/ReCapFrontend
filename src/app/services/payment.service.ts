import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = 'https://localhost:44373/api';
  constructor(private httpClient: HttpClient)  {  }
  addPayment(payment:Payment):Observable<ResponseModel> {
    let newPath = this.apiUrl + "/payments/add";
    return this.httpClient.post<ResponseModel>(newPath,payment);
  }
}