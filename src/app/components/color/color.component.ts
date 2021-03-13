import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  dataLoaded=false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColor();
  }

  getColor(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
      this.dataLoaded=true;
    })
  }
}
