import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';
import { CountriesComponent } from './countries/countries.component';
import { PopularCountriesComponent } from './countries/popular/popular.component';
import { CountryComponent } from './country/country.component';
import { BreadcrumbsComponent } from './country/breadcrumbs/breadcrumbs.component';
import { CategorySchoolsComponent } from './category-schools/category-schools.component';
import { CategoryJobsComponent } from './category-jobs/category-jobs.component';
import { CategoryBreadcrumbComponent } from './catetory-breadcrumb/category-breadcrumb.component';
import { PopularSchoolsComponent } from './category-schools/popular-schools/popular-schools.component';
import { CateogryPopularJobsComponent } from './category-jobs/popular-jobs/popular-jobs.component';
import { CategoryEmployersComponent } from './category-employers/category-employers.component';
import { CateogryPopularEmployersComponent } from './category-employers/popular-employers/popular-employers.component';
import { CategorySkillsComponent } from './category-skills/category-skills.component';
import { CateogryPopularSkillsComponent } from './category-skills/popular-skills/popular-skills.component';
import { CategoryCertificationsComponent } from './category-certifications/category-certifications.component';
import { CateogryPopularCertificationsComponent } from './category-certifications/popular-certifications/popular-certifications.component';

import { CategoryIndustriesComponent } from './category-industries/category-industries.component';
import { CateogryPopularIndustriesComponent } from './category-industries/popular-industries/popular-industries.component';

import { CategoryDegreesComponent } from './category-degrees/category-degrees.component';
import { CateogryPopularDegreesComponent } from './category-degrees/popular-degrees/popular-degrees.component';

import { CountryCategoryModule } from './country-category/country-category.module';

@NgModule({
  declarations: [
    PopularCountriesComponent,
    ResearchComponent, 
    CountriesComponent, 
    CountryComponent, 
    BreadcrumbsComponent, 
    CategorySchoolsComponent, 
    CategoryJobsComponent, 
    CategoryBreadcrumbComponent,
    PopularSchoolsComponent,
    CateogryPopularJobsComponent,
    CategoryEmployersComponent,
    CateogryPopularEmployersComponent,
    CategorySkillsComponent,
    CateogryPopularSkillsComponent,
    CategoryCertificationsComponent,
    CateogryPopularCertificationsComponent,
    CategoryIndustriesComponent,
    CateogryPopularIndustriesComponent,
    CategoryDegreesComponent,
    CateogryPopularDegreesComponent,
  ],
  imports: [
    ResearchRoutingModule,
    CountryCategoryModule,
    SharedModule,
    LayoutModule,
    CommonModule
  ]
})
export class ResearchModule { }
