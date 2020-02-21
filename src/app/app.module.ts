import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { BaseComponent } from './base/base.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegComponent } from './reg/reg.component';
import { LoggedComponent } from './logged/logged.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    BaseComponent,
    LogInComponent,
    RegComponent,
    LoggedComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
