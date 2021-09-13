import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey.component';
import { ChooseComponent } from './choose/choose.component';
import { JobComponent } from './job/job.component';
import { CompensationComponent } from './compensation/compensation.component';
import { SpecialConsiderationsComponent } from './special-considerations/special-considerations.component';
import { EmployerComponent } from './employer/employer.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { EducationComponent } from './education/education.component';
import { OptionalResearchQuestionsComponent } from './optional-research-questions/optional-research-questions.component';
import { ReportComponent } from './report/report.component';
import { PriceAJobComponent } from './price-a-job/price-a-job.component';
import { DetailsComponent } from './price-a-job/details/details.component';

const routes: Routes = [
  {
    path: '', component: SurveyComponent,
    children: [
      {path: 'choose', component: ChooseComponent},
      {path: 'job', component: JobComponent},
      {path: 'compensation', component: CompensationComponent},
      {path: 'special-considerations', component: SpecialConsiderationsComponent},
      {path: 'employer', component: EmployerComponent},
      {path: 'benefits', component: BenefitsComponent},
      {path: 'education', component: EducationComponent},
      {path: 'optional-research-questions', component: OptionalResearchQuestionsComponent},
      {path: 'report', component: ReportComponent},
      {path: 'price-a-job', component: PriceAJobComponent},
      {path: 'price-a-job/details', component: DetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }