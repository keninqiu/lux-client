import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountryCategoryComponent } from './country-category.component';
import { BrowseComponent } from './browse/browse.component';
import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [
    CountryCategoryComponent,
    BrowseComponent,
    PopularComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CountryCategoryModule { }
