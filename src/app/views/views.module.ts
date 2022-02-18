import { NgModule } from '@angular/core';

import { FeaturesModule } from '../features/features.module';

import { SharedModule } from '../shared/shared.module';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewSearchComponent } from './view-search/view-search.component';
import { ViewEditionComponent } from './view-edition/view-edition.component';
import { ViewContentComponent } from './view-content/view-content.component';


@NgModule({
  declarations: [
    ViewTemplateComponent,
    ViewHomeComponent,
    ViewSearchComponent,
    ViewEditionComponent,
    ViewContentComponent
  ],
  imports: [
    FeaturesModule,
    SharedModule
  ],
  exports: [
    ViewHomeComponent,
    ViewSearchComponent,
    ViewEditionComponent,
    ViewContentComponent
  ]
})
export class ViewsModule { }
