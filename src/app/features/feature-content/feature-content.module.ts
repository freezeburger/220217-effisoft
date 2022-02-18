import { NgModule } from '@angular/core';


import { SharedModule } from '../../shared/shared.module';
import { FeatureContentComponent } from './feature-content.component';



@NgModule({
  declarations: [
    FeatureContentComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatureContentComponent
  ]
})
export class FeatureContentModule { }
