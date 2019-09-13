import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditsComponent } from './credits/credits.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreditsRoutingModule } from './credits-routing.module';



@NgModule({
  declarations: [CreditsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreditsRoutingModule
  ]
})
export class CreditsModule { }
