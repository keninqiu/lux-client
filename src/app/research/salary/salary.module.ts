import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './salary.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { ContentComponent } from './content/content.component';
import { PaychartComponent } from './paychart/paychart.component';
import { MarketWorthComponent } from './market-worth/market-worth.component';
import { ExploreComponent } from './explore/explore.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { PayByExperienceLevelComponent } from './pay-by-experience-level/pay-by-experience-level.component';
import { WhatDoComponent } from './what-do/what-do.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { JobSatisfactionComponent } from './job-satisfaction/job-satisfaction.component';

@NgModule({
    declarations: [SalaryComponent, SubNavComponent, ContentComponent, PaychartComponent, MarketWorthComponent, ExploreComponent, FeaturedContentComponent, PayByExperienceLevelComponent, WhatDoComponent, HowItWorksComponent, JobSatisfactionComponent],
    imports: [
        SalaryRoutingModule,
      LayoutModule,
      CommonModule
    ]
  })
  export class SalaryModule { }