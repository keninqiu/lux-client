import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketWorthComponent } from './market-worth/market-worth.component';
import { WhatAmIWorthComponent } from './what-am-i-worth/what-am-i-worth.component';
import { SearchSalaryComponent } from './search-salary/search-salary.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    MarketWorthComponent,
    WhatAmIWorthComponent,
    SearchSalaryComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MarketWorthComponent,
    WhatAmIWorthComponent,
    SearchSalaryComponent,
    SearchResultComponent
  ]
})
export class SharedModule { }
