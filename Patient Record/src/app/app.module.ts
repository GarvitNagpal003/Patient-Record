import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { FormComponent } from './form/form.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { UpdateFormComponent } from './update-form/update-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    FormComponent,
    UpdateFormComponent,
    EditFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
