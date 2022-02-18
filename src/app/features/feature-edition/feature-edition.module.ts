import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FeatureEditionComponent } from './feature-edition.component';


@NgModule({
  declarations: [
    FeatureEditionComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatureEditionComponent
  ]
})
export class FeatureEditionModule { }
