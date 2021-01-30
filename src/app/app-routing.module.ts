
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Qes2Component } from './qes2/qes2.component';
import { Qes1Component } from './qes1/qes1.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'qes2', component:Qes2Component},
  { path: 'qes1', component:Qes1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
