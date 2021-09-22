import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsBySalaryComponent } from './jobs-by-salary.component';

describe('JobsBySalaryComponent', () => {
  let component: JobsBySalaryComponent;
  let fixture: ComponentFixture<JobsBySalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsBySalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsBySalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
