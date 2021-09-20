import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCertificationsByIndustryComponent } from './browse-certifications-by-industry.component';

describe('BrowseCertificationsByIndustryComponent', () => {
  let component: BrowseCertificationsByIndustryComponent;
  let fixture: ComponentFixture<BrowseCertificationsByIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCertificationsByIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCertificationsByIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
