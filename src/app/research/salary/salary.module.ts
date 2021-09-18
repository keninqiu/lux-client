import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './salary.component';
import { JobSubNavComponent } from './job/sub-nav/sub-nav.component';
import { ContentComponent } from './content/content.component';
import { PaychartComponent } from './job/paychart/paychart.component';
import { MarketWorthComponent } from './market-worth/market-worth.component';
import { ExploreComponent } from './job/explore/explore.component';
import { FeaturedContentComponent } from './job/featured-content/featured-content.component';
import { PayByExperienceLevelComponent } from './job/pay-by-experience-level/pay-by-experience-level.component';
import { WhatDoComponent } from './job/what-do/what-do.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { JobSatisfactionComponent } from './job/job-satisfaction/job-satisfaction.component';
import { SchoolComponent } from './school/school.component';
import { JobComponent } from './job/job.component';

import { SchoolSubNavComponent } from './school/sub-nav/sub-nav.component';
@NgModule({
    declarations: [
      SalaryComponent, 
      JobSubNavComponent, 
      ContentComponent, 
      PaychartComponent, 
      MarketWorthComponent, 
      ExploreComponent, 
      FeaturedContentComponent, 
      PayByExperienceLevelComponent, 
      WhatDoComponent, 
      HowItWorksComponent, 
      JobSatisfactionComponent, 
      SchoolComponent, 
      JobComponent,
      SchoolSubNavComponent
    ],
    imports: [
        SalaryRoutingModule,
      LayoutModule,
      CommonModule
    ]
  })
  export class SalaryModule { }