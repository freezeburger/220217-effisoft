import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureListSearchComponent } from './feature-list-search/feature-list-search.component';
import { FeatureListItemComponent } from './feature-list-item/feature-list-item.component';

@NgModule({
  declarations: [
    FeatureListComponent,
    FeatureListSearchComponent,
    FeatureListItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatureListComponent,
    FeatureListSearchComponent
  ]
})
export class FeatureListModule { }
