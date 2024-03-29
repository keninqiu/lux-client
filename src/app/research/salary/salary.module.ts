import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './salary.component';
import { JobSubNavComponent } from './job/sub-nav/sub-nav.component';
import { ContentComponent } from './content/content.component';
import { PaychartComponent } from './job/paychart/paychart.component';
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
import { SharedRelatedComponent } from './shared/related/related.component';
import { SharedPopularCompaniesComponent } from './shared/popular-companies/popular-companies.component';
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
import { EmployerOverviewComponent } from './employer/overview/overview.component';
import { EmployerCompanyReviewsComponent } from './employer/company-reviews/company-reviews.component';
import { BenefitsComponent } from './employer/benefits/benefits.component';
import { AboutComponent } from './employer/about/about.component';
import { SharedPopularDegreesComponent } from './shared/popular-degrees/popular-degrees.component';
import { JobListingComponent } from './employer/job-listing/job-listing.component';
import { CompareEmployersComponent } from './employer/compare-employers/compare-employers.component';
import { SharedJobsBySalaryComponent } from './shared/jobs-by-salary/jobs-by-salary.component';
import { SharedByDimensionComponent } from './shared/by-dimension/by-dimension.component';
import { DegreeOverviewComponent } from './degree/overview/overview.component';
import { CertificationOverviewComponent } from './certification/overview/overview.component';
import { SkillOverviewComponent } from './skill/overview/overview.component';
import { IndustryOverviewComponent } from './industry/overview/overview.component';
import { RelatedDegreesComponent } from './degree/related-degrees/related-degrees.component';
import { SharedJobSatisfactionComponent } from './shared/job-satisfaction/job-satisfaction.component';
import { RelatedIndustriesComponent } from './industry/related-industries/related-industries.component';
import { RelatedCertificationsComponent } from './certification/related-certifications/related-certifications.component';
@NgModule({
    declarations: [
      SalaryComponent, 
      JobSubNavComponent, 
      ContentComponent, 
      PaychartComponent, 
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
      SharedRelatedComponent,
      SharedPopularCompaniesComponent,
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
      IndustrySubNavComponent,
      EmployerOverviewComponent,
      EmployerCompanyReviewsComponent,
      BenefitsComponent,
      AboutComponent,
      SharedPopularDegreesComponent,
      JobListingComponent,
      CompareEmployersComponent,
      SharedJobsBySalaryComponent,
      SharedByDimensionComponent,
      DegreeOverviewComponent,
      CertificationOverviewComponent,
      SkillOverviewComponent,
      IndustryOverviewComponent,
      RelatedDegreesComponent,
      SharedJobSatisfactionComponent,
      RelatedIndustriesComponent,
      RelatedCertificationsComponent
    ],
    imports: [
      SalaryRoutingModule,
      SharedModule,
      LayoutModule,
      CommonModule,
      ChartsModule
    ]
  })
  export class SalaryModule { }