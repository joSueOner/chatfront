import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FwHomePage } from './Pages/fw-home/fw-home.page';
import { SharedModule } from '@Shared/shared.module';


@NgModule({
  declarations: [
    FwHomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
