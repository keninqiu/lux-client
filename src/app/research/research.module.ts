import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';
import { SearchSalaryComponent } from './search-salary/search-salary.component';
import { BrowseAllCategoriesComponent } from './browse-all-categories/browse-all-categories.component';
import { FindYourMarketWorthComponent } from './find-your-market-worth/find-your-market-worth.component';
import { BrowsePopularJobsComponent } from './browse-popular-jobs/browse-popular-jobs.component';
import { LearnAboutEmployersComponent } from './learn-about-employers/learn-about-employers.component';
import { ResearchSchoolsAndDegreesComponent } from './research-schools-and-degrees/research-schools-and-degrees.component';
import { GetCareerTipsAndAdviceComponent } from './get-career-tips-and-advice/get-career-tips-and-advice.component';
import { BrowseByStatesComponent } from './browse-by-states/browse-by-states.component';
import { RelatedArticlesComponent } from './related-articles/related-articles.component';
import { CompensationBestPracticesComponent } from './compensation-best-practices/compensation-best-practices.component';

import { CountriesComponent } from './countries/countries.component';
import { PopularCountriesComponent } from './countries/popular/popular.component';
import { BrowseCountriesComponent } from './countries/browse/browse.component';
import { CountryComponent } from './country/country.component';
import { BreadcrumbsComponent } from './country/breadcrumbs/breadcrumbs.component';
import { CategoriesComponent } from './country/categories/categories.component';
import { PopularJobsComponent } from './country/popular-jobs/popular-jobs.component';
import { EmployersComponent } from './country/employers/employers.component';
import { SchoolsDegreesComponent } from './country/schools-degrees/schools-degrees.component';
import { StatesComponent } from './country/states/states.component';
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
import { SearchResultComponent } from './search-result/search-result.component';

import { CountryCategoryModule } from './country-category/country-category.module';
@NgModule({
  declarations: [
    PopularCountriesComponent,
    BrowseCountriesComponent,
    ResearchComponent, 
    SearchSalaryComponent, 
    BrowseAllCategoriesComponent, 
    FindYourMarketWorthComponent, 
    BrowsePopularJobsComponent, 
    LearnAboutEmployersComponent, 
    ResearchSchoolsAndDegreesComponent, 
    GetCareerTipsAndAdviceComponent, 
    BrowseByStatesComponent,
    RelatedArticlesComponent, 
    CompensationBestPracticesComponent,
    CountriesComponent, 
    CountryComponent, 
    BreadcrumbsComponent, 
    CategoriesComponent, 
    PopularJobsComponent, 
    EmployersComponent, 
    SchoolsDegreesComponent, 
    StatesComponent, 
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
    SearchResultComponent
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
