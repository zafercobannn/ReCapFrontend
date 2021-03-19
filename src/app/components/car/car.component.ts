import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/cardto';
import { CarImage } from 'src/app/models/carimage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carDtos:CarDto[] = [];
  constructor(private carService:CarService, private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      if(params["brandId"])
      {
        this.getCarsByBrandId(params["brandId"])
      }
      else if(params["colorId"])
      {
        this.getCarsByColorId(params["colorId"]);
      }
      else
      {
        this.getCars();
      }
    })
  }

  getCars()
  {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarDtos(id:number)
  {
    this.carService.getCarDtos(id).subscribe(response => {
      this.carDtos = response.data;
    })
  }

  getCarsByBrandId(id:number)
  {
    this.carService.getCarsByBrandId(id).subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarsByColorId(id:number)
  {
    this.carService.getCarsByColorId(id).subscribe(response => {
      this.cars = response.data;
    })
  }
}