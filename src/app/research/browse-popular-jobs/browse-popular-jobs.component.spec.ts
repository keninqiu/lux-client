import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePopularJobsComponent } from './browse-popular-jobs.component';

describe('BrowsePopularJobsComponent', () => {
  let component: BrowsePopularJobsComponent;
  let fixture: ComponentFixture<BrowsePopularJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsePopularJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePopularJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
