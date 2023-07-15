import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrls: ['./vizsgafeladat.component.css']
})
export class VizsgafeladatComponent {
  suly:number=1;
  magassag:number=1;

  BMIindex():number{
    return this.suly / (this.magassag * this.magassag);
  }

  
  eredmenyek:string[]=[];
  eredmenyMentes():void{
    this.eredmenyek.push(this.suly+""+this.magassag+""+this.BMIindex());
  }

}
