import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArdolFormComponent } from './conversor-dolar/ardol-form/ardol-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConversorDolarComponent } from './conversor-dolar/conversor-dolar.component';
import { ConversorSteamComponent } from './conversor-steam/conversor-steam.component';
import { registerLocaleData } from '@angular/common';
import esAR from '@angular/common/locales/es-AR';

registerLocaleData(esAR);

@NgModule({
  declarations: [
    AppComponent,
    ArdolFormComponent,
    ConversorDolarComponent,
    ConversorSteamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
