import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryPopularEmployersComponent } from './popular-employers.component';

describe('CateogryPopularEmployersComponent', () => {
  let component: CateogryPopularEmployersComponent;
  let fixture: ComponentFixture<CateogryPopularEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryPopularEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryPopularEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
