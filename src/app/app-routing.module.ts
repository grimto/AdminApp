import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DialogdataComponent} from './dialogdata/dialogdata.component';

const routes: Routes = [
  { path: 'dialogdata', component: DialogdataComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
