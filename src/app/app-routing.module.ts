import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldataComponent } from './components/alldata/alldata.component';
import { DisplayComponent } from './components/display/display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserdataComponent } from './components/userdata/userdata.component';

const routes: Routes = [
  {
    path:'',component:DisplayComponent
  },
  {
    path:'display',component:DisplayComponent
  },
   {
   path:'navbar',component:NavbarComponent
  },
  {
    path:'sidebar',component:SidebarComponent
  },
  {
    path:'userdata',component:UserdataComponent
  },
  {
    path:'alldata',component:AlldataComponent
  },
  // {path:'',component:Component
//}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
