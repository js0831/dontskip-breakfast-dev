import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultLayoutComponent } from './default-layout.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [DefaultLayoutComponent]
})
export class LayoutModule { }
