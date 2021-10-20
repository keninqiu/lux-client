import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'research', loadChildren: () => import('./research/research.module').then(m => m.ResearchModule)
  },
  {
    path: 'price-job', loadChildren: () => import('./price-job/price-job.module').then(m => m.PriceJobModule)
  },
  {
    path: 'survey', loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule)
  }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
