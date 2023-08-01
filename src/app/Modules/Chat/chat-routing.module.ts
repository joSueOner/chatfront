import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FwChatPage } from './Pages/fw-chat/fw-chat.page';
import { FwLayoutPage } from '@Shared/Pages/fw-layout/fw-layout.page';

const routes: Routes = [
  {
    path: "",
    component: FwLayoutPage,
    children: [
      {
        path: "",
        redirectTo: "/Chat",
        pathMatch: "full",
      },
      {
        path: "",
        component: FwChatPage,
      },
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
