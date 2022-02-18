import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { BaseNavigationComponent } from './base-navigation/base-navigation.component';
import { BaseFooterComponent } from './base-footer/base-footer.component';



@NgModule({
  declarations: [
    BaseHeaderComponent,
    BaseNavigationComponent,
    BaseFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseHeaderComponent,
    BaseNavigationComponent,
    BaseFooterComponent
  ]
})
export class BaseModule { }
