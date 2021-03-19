import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDto } from '../models/customerDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44373/api/customers/getall';
  apiUrl2 = 'https://localhost:44373/api/customers/getcustomerdetails';

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>
  {
      return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }

  getCustomerDtos():Observable<ListResponseModel<CustomerDto>>
  {
      return this.httpClient.get<ListResponseModel<CustomerDto>>(this.apiUrl2);
  }
}