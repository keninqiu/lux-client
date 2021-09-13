import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCompaniesByIndustryComponent } from './browse-companies-by-industry.component';

describe('BrowseCompaniesByIndustryComponent', () => {
  let component: BrowseCompaniesByIndustryComponent;
  let fixture: ComponentFixture<BrowseCompaniesByIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCompaniesByIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCompaniesByIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
