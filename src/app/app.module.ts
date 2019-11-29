import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRouteModule} from './app.route';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { AttendanceComponent } from './attendance/attendance.component';
import {NgBusyModule} from 'ng-busy';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AttendanceComponent,

  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgBusyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
