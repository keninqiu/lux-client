import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';
import { EmployerComponent } from './employer/employer.component';
import { JobComponent } from './job/job.component';
import { DegreeComponent } from './degree/degree.component';
import { CertificationComponent } from './certification/certification.component';
import { SkillComponent } from './skill/skill.component';
import { IndustryComponent } from './industry/industry.component';
import { SchoolComponent } from './school/school.component';
import { SearchSalaryComponent } from './search-salary/search-salary.component';
import { BrowseAllCategoriesComponent } from './browse-all-categories/browse-all-categories.component';
import { FindYourMarketWorthComponent } from './find-your-market-worth/find-your-market-worth.component';
import { BrowsePopularJobsComponent } from './browse-popular-jobs/browse-popular-jobs.component';
import { LearnAboutEmployersComponent } from './learn-about-employers/learn-about-employers.component';
import { ResearchSchoolsAndDegreesComponent } from './research-schools-and-degrees/research-schools-and-degrees.component';
import { GetCareerTipsAndAdviceComponent } from './get-career-tips-and-advice/get-career-tips-and-advice.component';
import { BrowseByStatesComponent } from './browse-by-states/browse-by-states.component';
import { BrowseCompaniesByIndustryComponent } from './employer/browse-companies-by-industry/browse-companies-by-industry.component';
import { RelatedArticlesComponent } from './related-articles/related-articles.component';
import { CompensationBestPracticesComponent } from './compensation-best-practices/compensation-best-practices.component';
import { PopularSearchesComponent } from './popular-searches/popular-searches.component';
import { BrowseDegreesByFieldOfStudyComponent } from './degree/browse-degrees-by-field-of-study/browse-degrees-by-field-of-study.component';
import { BrowseCertificationsByIndustryComponent } from './certification/browse-certifications-by-industry/browse-certifications-by-industry.component';
import { BrowseSkillsByCategoryComponent } from './skill/browse-skills-by-category/browse-skills-by-category.component';
import { BrowseIndustriesByCategoryComponent } from './industry/browse-industries-by-category/browse-industries-by-category.component';
import { BrowseSchoolsByCategoryComponent } from './school/browse-schools-by-category/browse-schools-by-category.component';
import { BrowseJobsByCategoryComponent } from './job/browse-jobs-by-category/browse-jobs-by-category.component';

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

@NgModule({
  declarations: [
    PopularCountriesComponent,
    BrowseCountriesComponent,
    ResearchComponent, 
    EmployerComponent, 
    JobComponent, 
    DegreeComponent, 
    CertificationComponent, 
    SkillComponent, 
    IndustryComponent, 
    SchoolComponent, 
    SearchSalaryComponent, 
    BrowseAllCategoriesComponent, 
    FindYourMarketWorthComponent, 
    BrowsePopularJobsComponent, 
    LearnAboutEmployersComponent, 
    ResearchSchoolsAndDegreesComponent, 
    GetCareerTipsAndAdviceComponent, 
    BrowseByStatesComponent, 
    BrowseCompaniesByIndustryComponent, 
    BrowseJobsByCategoryComponent,
    RelatedArticlesComponent, 
    CompensationBestPracticesComponent, 
    PopularSearchesComponent, 
    BrowseDegreesByFieldOfStudyComponent, 
    BrowseCertificationsByIndustryComponent, 
    BrowseSkillsByCategoryComponent, 
    BrowseIndustriesByCategoryComponent, 
    BrowseSchoolsByCategoryComponent, 
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
    SharedModule,
    LayoutModule,
    CommonModule
  ]
})
export class ResearchModule { }
