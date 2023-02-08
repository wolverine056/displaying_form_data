import { Component, OnInit } from '@angular/core';
import { SidenavbarService } from 'src/app/service/sidenavbar.service';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent implements OnInit {
  tabledata:any;
  tablevalue:any='none';
  paravalue:any='none';
  note:any='Currently there is no Data'


  constructor(private local:SidenavbarService) { }

  ngOnInit(): void {
  }
  getData() {
    let something = this.local.getDATA();
    this.tabledata=something;
    console.log(this.tabledata)
    if(this.tabledata.length>0)
    {
      this.tablevalue='block';
      this.paravalue='none';
    }
    else{
      this.tablevalue='none';
      this.paravalue='block';
    }
  }

}
