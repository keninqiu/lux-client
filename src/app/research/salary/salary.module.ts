import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { ChartsModule } from 'ng2-charts';
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
import { SchoolOverviewComponent } from './school/overview/overview.component';
import { JobsBySalaryComponent } from './school/jobs-by-salary/jobs-by-salary.component';
import { SchoolsBySalaryComponent } from './school/schools-by-salary/schools-by-salary.component';
import { SchoolByDimensionComponent } from './school/by-dimension/by-dimension.component';
import { PopularCompaniesComponent } from './school/popular-companies/popular-companies.component';
import { AboutThisSchoolComponent } from './school/about-this-school/about-this-school.component';
import { EmployerComponent } from './employer/employer.component';
import { CertificationComponent } from './certification/certification.component';
import { DegreeComponent } from './degree/degree.component';
import { SkillComponent } from './skill/skill.component';
import { IndustryComponent } from './industry/industry.component';
import { EmployerSubNavComponent } from './employer/sub-nav/sub-nav.component';
import { DegreeSubNavComponent } from './degree/sub-nav/sub-nav.component';
import { CertificationSubNavComponent } from './certification/sub-nav/sub-nav.component';
import { SkillSubNavComponent } from './skill/sub-nav/sub-nav.component';
import { IndustrySubNavComponent } from './industry/sub-nav/sub-nav.component';

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
      SchoolSubNavComponent,
      SchoolOverviewComponent,
      JobsBySalaryComponent,
      SchoolsBySalaryComponent,
      SchoolByDimensionComponent,
      PopularCompaniesComponent,
      AboutThisSchoolComponent,
      EmployerComponent,
      CertificationComponent,
      DegreeComponent,
      SkillComponent,
      IndustryComponent,
      EmployerSubNavComponent,
      DegreeSubNavComponent,
      CertificationSubNavComponent,
      SkillSubNavComponent,
      IndustrySubNavComponent
    ],
    imports: [
      SalaryRoutingModule,
      LayoutModule,
      CommonModule,
      ChartsModule
    ]
  })
  export class SalaryModule { }