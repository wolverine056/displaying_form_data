import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DisplayComponent } from './components/display/display.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { FormsModule } from '@angular/forms';
import { SidenavbarService } from './service/sidenavbar.service';
import { AlldataComponent } from './components/alldata/alldata.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DisplayComponent,
    UserdataComponent,
    AlldataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SidenavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
