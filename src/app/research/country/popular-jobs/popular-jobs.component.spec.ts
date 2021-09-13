import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobsComponent } from './popular-jobs.component';

describe('PopularJobsComponent', () => {
  let component: PopularJobsComponent;
  let fixture: ComponentFixture<PopularJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
