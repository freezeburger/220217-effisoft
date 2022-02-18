import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListModule } from './feature-list/feature-list.module';
import { FeatureEditionModule } from './feature-edition/feature-edition.module';
import { FeatureContentModule } from './feature-content/feature-content.module';
import { FeatureLoginModule } from './feature-login/feature-login.module';



@NgModule({
  exports: [
    CommonModule,
    FeatureListModule,
    FeatureEditionModule,
    FeatureContentModule,
    FeatureLoginModule
  ]
})
export class FeaturesModule { }
