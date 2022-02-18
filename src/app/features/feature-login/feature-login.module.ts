import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FeatureLoginComponent } from './feature-login.component';


@NgModule({
  declarations: [
    FeatureLoginComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatureLoginComponent
  ]
})
export class FeatureLoginModule { }
