import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { DispatcherService } from './dispatcher.service';
import { MessageService } from './message.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    AuthService,
    DispatcherService,
    MessageService
  ]
})
export class LogicModule {
  constructor(
    @Inject(DispatcherService) private dispacther:DispatcherService
  ){}
}
