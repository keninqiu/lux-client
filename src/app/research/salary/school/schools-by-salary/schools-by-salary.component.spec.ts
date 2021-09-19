import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsBySalaryComponent } from './schools-by-salary.component';

describe('SchoolsBySalaryComponent', () => {
  let component: SchoolsBySalaryComponent;
  let fixture: ComponentFixture<SchoolsBySalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsBySalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsBySalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
