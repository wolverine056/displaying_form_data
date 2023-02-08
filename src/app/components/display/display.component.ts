import { Component, OnInit } from '@angular/core';
import { SidenavbarService } from 'src/app/service/sidenavbar.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service:SidenavbarService) { }

  ngOnInit(): void {
  }
  userid:any;
  username:any;
  userrole:any;
  userdept:any;
  Submit(inputdata:any){
    this.service.savedata(inputdata);
    console.log(inputdata);
    this.userid="";
    this.username="";
    this.userrole="";
    this.userdept="";
    }
}
