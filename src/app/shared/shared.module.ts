import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketWorthComponent } from './market-worth/market-worth.component';
import { WhatAmIWorthComponent } from './what-am-i-worth/what-am-i-worth.component';
import { SearchSalaryComponent } from './search-salary/search-salary.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ListSimpleComponent } from './list/simple/simple.component';
import { PageSectionComponent } from './page-section/page-section.component';
import { ListCardComponent } from './list/card/card.component';

const components = [
  MarketWorthComponent,
  WhatAmIWorthComponent,
  SearchSalaryComponent,
  SearchResultComponent,
  MainContainerComponent,
  ListSimpleComponent,
  PageSectionComponent,
  ListCardComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class SharedModule { }
