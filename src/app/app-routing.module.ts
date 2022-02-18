import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContentComponent } from './views/view-content/view-content.component';
import { ViewEditionComponent } from './views/view-edition/view-edition.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewSearchComponent } from './views/view-search/view-search.component';

const routes: Routes = [
  {
    path:'home',
    component:ViewHomeComponent
  },
  {
    path:'search',
    component:ViewSearchComponent
  },
  {
    path:'edition',
    component:ViewEditionComponent
  },
  {
    path:'content',
    component:ViewContentComponent
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
