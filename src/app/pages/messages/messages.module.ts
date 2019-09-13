import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesRoutingModule } from './messages-routing.module';



@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
