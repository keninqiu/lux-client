import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCompaniesComponent } from './popular-companies.component';

describe('PopularCompaniesComponent', () => {
  let component: PopularCompaniesComponent;
  let fixture: ComponentFixture<PopularCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
