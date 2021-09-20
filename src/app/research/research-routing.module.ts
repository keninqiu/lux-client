import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './research.component';
import { EmployerComponent } from './employer/employer.component';
import { JobComponent } from './job/job.component';
import { DegreeComponent } from './degree/degree.component';
import { CertificationComponent } from './certification/certification.component';
import { SkillComponent } from './skill/skill.component';
import { IndustryComponent } from './industry/industry.component';
import { SchoolComponent } from './school/school.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CategorySchoolsComponent } from './category-schools/category-schools.component';
import { CategoryJobsComponent } from './category-jobs/category-jobs.component';
import { CategoryEmployersComponent } from './category-employers/category-employers.component';
import { CategorySkillsComponent } from './category-skills/category-skills.component';
import { CategoryCertificationsComponent } from './category-certifications/category-certifications.component';
import { CategoryDegreesComponent } from './category-degrees/category-degrees.component';
import { CategoryIndustriesComponent } from './category-industries/category-industries.component';

const routes: Routes = [
  { path: '', component: ResearchComponent },
  { path: 'Country', component: CountriesComponent },
  { path: ':countryCode/School/:categorySlug', component: CategorySchoolsComponent },
  { path: ':countryCode/Job/:categorySlug', component: CategoryJobsComponent },
  { path: ':countryCode/Employer/:categorySlug', component: CategoryEmployersComponent },
  { path: ':countryCode/Skill/:categorySlug', component: CategorySkillsComponent },
  { path: ':countryCode/Certification/:categorySlug', component: CategoryCertificationsComponent },
  { path: ':countryCode/Degree/:categorySlug', component: CategoryDegreesComponent },
  { path: ':countryCode/Industry/:categorySlug', component: CategoryIndustriesComponent },
  { path: ':countryCode/Salary', component: CountryComponent },
  { path: ':countryCode/School', component: SchoolComponent },
  { path: ':countryCode/Job', component: JobComponent },
  { path: ':countryCode/Certification', component: CertificationComponent },
  { path: ':countryCode/Skill', component: SkillComponent },
  { path: ':countryCode/Employer', component: EmployerComponent },
  { path: ':countryCode/Industry', component: IndustryComponent },
  { path: ':countryCode/Degree', component: DegreeComponent },
  {
    path: ':countryCode/:type/:salaryType', loadChildren: () => import('./salary/salary.module').then(m => m.SalaryModule)
  },
  
  { path: 'job', component: JobComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'degree', component: DegreeComponent },
  { path: 'certification', component: CertificationComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'industry', component: IndustryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }