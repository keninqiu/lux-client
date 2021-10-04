import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './research.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CategorySchoolsComponent } from './category-schools/category-schools.component';
import { CategoryJobsComponent } from './category-jobs/category-jobs.component';
import { CategoryEmployersComponent } from './category-employers/category-employers.component';
import { CategorySkillsComponent } from './category-skills/category-skills.component';
import { CategoryCertificationsComponent } from './category-certifications/category-certifications.component';
import { CategoryDegreesComponent } from './category-degrees/category-degrees.component';
import { CategoryIndustriesComponent } from './category-industries/category-industries.component';


import { CountryCategoryComponent } from './country-category/country-category.component';

const routes: Routes = [
  { 
    path: '', 
    component: ResearchComponent,
    children: [
      { path: 'Country', component: CountriesComponent },
      { path: ':countryCode/School/:categorySlug', component: CategorySchoolsComponent },
      { path: ':countryCode/Job/:categorySlug', component: CategoryJobsComponent },
      { path: ':countryCode/Employer/:categorySlug', component: CategoryEmployersComponent },
      { path: ':countryCode/Skill/:categorySlug', component: CategorySkillsComponent },
      { path: ':countryCode/Certification/:categorySlug', component: CategoryCertificationsComponent },
      { path: ':countryCode/Degree/:categorySlug', component: CategoryDegreesComponent },
      { path: ':countryCode/Industry/:categorySlug', component: CategoryIndustriesComponent },
      { path: ':countryCode/Salary', component: CountryComponent },
      { path: ':countryCode/:type', component: CountryCategoryComponent },

      {
        path: ':countryCode/:type/:salaryType', loadChildren: () => import('./salary/salary.module').then(m => m.SalaryModule)
      },
      {
        path: ':countryCode/:type/:salaryType/:parentId/:parentName', loadChildren: () => import('./salary/salary.module').then(m => m.SalaryModule)
      }
    ] 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }