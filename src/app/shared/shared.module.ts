import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketWorthComponent } from './market-worth/market-worth.component';
import { WhatAmIWorthComponent } from './what-am-i-worth/what-am-i-worth.component';

@NgModule({
  declarations: [
    MarketWorthComponent,
    WhatAmIWorthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MarketWorthComponent,
    WhatAmIWorthComponent
  ]
})
export class SharedModule { }
