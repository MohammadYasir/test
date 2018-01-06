import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMatComponentsModule } from './custom-mat-components/custom-mat-components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskitemComponent } from './components/taskitem/taskitem.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskService } from './service/task.service';
import { FormComponent } from './components/form/form.component'
import { routing } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    TaskitemComponent,
    TasklistComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, CustomMatComponentsModule,
    BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule, routing
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
