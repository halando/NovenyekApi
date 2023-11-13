import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { KosarService } from '../kosar.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {
  plants:any

  oszlopok=[
    {key:"id",text:"#",type:"plain"},
    {key:"ar",text:"#Ár",type:"number"},
    {key:"kepUrl",text:"Kép",type:"image"},
    {key:"leiras",text:"Leírás",type:"text"},
    {key:"megnevezes",text:"Név",type:"text"}
  ]
  db:any
 constructor(private base:BaseService, private kosar:KosarService){
  
  this.base.getPlants().subscribe(
    (adatok)=>this.plants=adatok
  )
 }
 kosarba(id:any,db:any){

  this.kosar.addTetel(id,db)
 }
}
