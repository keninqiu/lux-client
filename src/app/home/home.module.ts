import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AdvComponent } from './adv/adv.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChangeComponent } from './change/change.component';
import { SalaryDataComponent } from './salary-data/salary-data.component';
import { CustomersExperienceComponent } from './customers-experience/customers-experience.component';
import { BestInClassComponent } from './best-in-class/best-in-class.component';
import { GsapComponent } from './gsap/gsap.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent, AdvComponent, CarouselComponent, ChangeComponent, SalaryDataComponent, CustomersExperienceComponent, BestInClassComponent, GsapComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
