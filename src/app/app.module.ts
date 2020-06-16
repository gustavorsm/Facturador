import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import { RateService } from '../app/services/rateService.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    RateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
