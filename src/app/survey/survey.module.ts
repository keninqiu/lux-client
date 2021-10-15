import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { TopComponent } from './top/top.component';
import { ChooseComponent } from './choose/choose.component';
import { BottomComponent } from './bottom/bottom.component';
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



@NgModule({
  declarations: [SurveyComponent, TopComponent, ChooseComponent, BottomComponent, JobComponent, CompensationComponent, SpecialConsiderationsComponent, EmployerComponent, BenefitsComponent, EducationComponent, OptionalResearchQuestionsComponent, ReportComponent, PriceAJobComponent, DetailsComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    SurveyRoutingModule
  ]
})
export class SurveyModule { }
