import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArdolFormComponent } from './conversor-dolar/ardol-form/ardol-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConversorDolarComponent } from './conversor-dolar/conversor-dolar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArdolFormComponent,
    ConversorDolarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
