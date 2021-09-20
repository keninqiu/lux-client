import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryPopularIndustriesComponent } from './popular-jobs.component';

describe('CateogryPopularIndustriesComponent', () => {
  let component: CateogryPopularIndustriesComponent;
  let fixture: ComponentFixture<CateogryPopularIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryPopularIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryPopularIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
