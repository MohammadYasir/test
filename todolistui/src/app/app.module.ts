import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule,
  MatSelectModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatCardModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
