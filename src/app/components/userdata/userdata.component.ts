import { Attribute } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SidenavbarService } from 'src/app/service/sidenavbar.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  databyid:any=[];
  data:any;

  notevalue:any='none';
  tablevalue:any='none';
  note:any="No Data Exists with given ID Number";
  constructor(private service:SidenavbarService) { }

  ngOnInit(): void {
  }
  getdatabyid() {
    let id = (document.getElementById('data')as HTMLInputElement).value;
    this.data=this.service.getDATA();
    this.databyid=this.data.filter((x:any) => x.userId == id) 
    console.log(this.databyid);

    if(this.databyid.length>0)
    {
      this.tablevalue='block';
      
      this.notevalue='none';
    }
    else 
    {
      this.tablevalue='none';
      
      this.notevalue='block';
      
    }
    
    
  }
  
}
