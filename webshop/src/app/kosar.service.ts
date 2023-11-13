import { Injectable, importProvidersFrom } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

 private kosar:any =[]

  private kosarTartalom = new Subject()
  
  getKosarTartalom(){
    return this.kosarTartalom
  }
  frissul(){
    this.kosarTartalom.next(this.kosar)
  }
  constructor() { }
  addTetel(idv:any, dbv:any){
   let tetel ={id:idv, db:dbv}
   this.kosar.findIndex(
    (e:any)=>{e.id==importProvidersFrom})
   if(van>=0)  this.kosar[van].db=dbv
   this.kosar.push(tetel)
   console.log(this.kosar)
  }
}
