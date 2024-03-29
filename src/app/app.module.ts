import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth2.service';
import { AuthGuard } from './services/auth-guard.service';
import { CountryService } from './services/country.service';
import { StateService } from './services/state.service';
import { CityService } from './services/city.service';
import { CertificationService } from './services/certification.service';
import { EmployerService } from './services/employer.service';
import { DegreeService } from './services/degree.service';
import { IndustryService } from './services/industry.service';
import { JobService } from './services/job.service';
import { SchoolService } from './services/school.service';
import { SkillService } from './services/skill.service';
import { CategoryService } from './services/category.service';
import { PopularService } from './services/popular.service';
import { HomepageService } from './services/homepage.service';
import { UtilService } from './services/util.service';
import { AllService } from './services/all.service';
import { SurveyService } from './services/survey.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    CountryService,
    StateService,
    CityService,
    CertificationService,
    EmployerService,
    DegreeService,
    IndustryService,
    JobService,
    SchoolService,
    SkillService,
    CategoryService,
    PopularService,
    HomepageService,
    UtilService,
    AllService,
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
