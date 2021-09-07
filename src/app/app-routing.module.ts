import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversorDolarComponent } from './conversor-dolar/conversor-dolar.component';

const routes: Routes = [
  { path: '', component: ConversorDolarComponent },
  //{ path: 'steam', component: ConversorSteamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }