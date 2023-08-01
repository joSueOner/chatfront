import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FwLayoutPage } from '@Shared/Pages/fw-layout/fw-layout.page';
import { FwHomePage } from './Pages/fw-home/fw-home.page';

const routes: Routes = [
  {
    path: "",
    component: FwLayoutPage,
    children: [
      {
        path: "",
        component: FwHomePage,
      },
    ],
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
