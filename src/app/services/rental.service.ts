import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDtoResponseModel } from '../models/rentaldtoResponseModel';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44373/api/rentals/getall';
  apiUrl2 = "https://localhost:44373/api/rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }
  
  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl)

  }
  
  getRentalDtos():Observable<RentalDtoResponseModel>
  {
    return this.httpClient.get<RentalDtoResponseModel>(this.apiUrl2);
  }
}