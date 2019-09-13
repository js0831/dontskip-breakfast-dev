import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/ui/button/button.component';
import { HeaderComponent } from '../core/header/header.component';
import { IconComponent } from './components/ui/icon/icon.component';
import { DrawerComponent } from '../core/drawer/drawer.component';
import { PopupComponent } from './components/popup/popup.component';
import { MenuListComponent } from '../pages/menu/menu-list/menu-list.component';
import { SearchComponent } from './components/search/search.component';
import { MenuDetailsComponent } from '../pages/menu/menu-details/menu-details.component';
import { FoodVariantSelectComponent } from '../pages/menu/food-variant-select/food-variant-select.component';
import { WowComponent } from './components/wow/wow.component';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    DrawerComponent,
    IconComponent,
    PopupComponent,
    MenuListComponent,
    SearchComponent,
    MenuDetailsComponent,
    FoodVariantSelectComponent,
    WowComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    ButtonComponent,
    HeaderComponent,
    IconComponent,
    DrawerComponent,
    PopupComponent,
    MenuListComponent,
    SearchComponent,
    MenuDetailsComponent,
    FoodVariantSelectComponent,
    WowComponent
  ]
})
export class SharedModule { }
