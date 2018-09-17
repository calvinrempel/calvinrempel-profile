import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routes as routes } from './routes';

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}