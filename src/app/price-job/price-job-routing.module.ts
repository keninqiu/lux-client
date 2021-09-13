import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PriceJobComponent } from './price-job.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  { 
    path: '', 
    component: PriceJobComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceJobRoutingModule { }