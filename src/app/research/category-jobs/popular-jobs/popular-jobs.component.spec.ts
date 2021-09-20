import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryPopularJobsComponent } from './popular-jobs.component';

describe('CateogryPopularJobsComponent', () => {
  let component: CateogryPopularJobsComponent;
  let fixture: ComponentFixture<CateogryPopularJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryPopularJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryPopularJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
