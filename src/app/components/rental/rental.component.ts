import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';
import { RentalDto } from 'src/app/models/rentalDto';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
  rentalDtos: RentalDto[] = [];
  dataLoaded=false;

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDtos();
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true;
    })
  }
  getRentalDtos() {
    this.rentalService.getRentalDtos().subscribe(response => {
      this.rentalDtos = response.data;
      this.dataLoaded=true;
    })
   }

}
