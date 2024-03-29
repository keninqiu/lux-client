import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { PriceJobRoutingModule } from './price-job-routing.module';
import { PriceJobComponent } from './price-job.component';
import { ContentComponent } from './content/content.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';



@NgModule({
  declarations: [PriceJobComponent, ContentComponent, VerifyEmailComponent],
  imports: [
    LayoutModule,
    FormsModule,
    PriceJobRoutingModule,
    CommonModule
  ]
})
export class PriceJobModule { }
