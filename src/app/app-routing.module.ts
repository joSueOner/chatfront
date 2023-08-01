import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "/Chat",
        pathMatch: "full",
      },
      {
        path: "Home",
        loadChildren: () => import("./Modules/Home/home.module").then(m => m.HomeModule)
      },
      {
        path: "Chat",
        loadChildren: () => import("./Modules/Chat/chat.module").then(m => m.ChatModule)
      }
    
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
