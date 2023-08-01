import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FwLayoutPage } from './Pages/fw-layout/fw-layout.page';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FwLayoutPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule { }
