import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuListV2Component } from './menu-list-v2/menu-list-v2.component';



const routes: Routes = [
  { path: '', component: MenuComponent}
  // { path: '', component: MenuListV2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
