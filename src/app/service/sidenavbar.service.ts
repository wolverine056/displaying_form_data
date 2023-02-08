import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavbarService {

  constructor() { }

  public arraydata: any=[];

  savedata(data: any)
  {
    this.arraydata.push(data);
    localStorage.setItem("form_data",JSON.stringify(this.arraydata))
    console.log(this.arraydata)
  }
  getDATA()
  {
    let retriveDATA=localStorage.getItem("form_data");
    let retriveddata=JSON.parse(retriveDATA);
     return retriveddata;
  }
 
}

