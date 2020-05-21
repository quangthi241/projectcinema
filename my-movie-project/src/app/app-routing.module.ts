
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: './trang-chu/trang-chu.module#TrangChuModule'
  },
  {
    path: 'signin',
     loadChildren: './admin/admin.module#AdminModule'
    // path: "signin",
    // loadChildren: () =>
    //   import("./admin/admin.module").then(
    //     (m) => m.AdminModule
    //   ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
