import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ConsolasComponent } from './consolas/consolas.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { JsonToArray } from '../app/JsonToArray.pipe';
import { DatatableComponent } from './components/datatable/datatable.component';

// import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    ConsolasComponent,
    ConsultasComponent,
    JsonToArray,
    DatatableComponent,
    // DataTablesModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
