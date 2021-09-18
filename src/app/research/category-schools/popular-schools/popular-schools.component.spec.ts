import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSchoolsComponent } from './popular-schools.component';

describe('PopularSchoolsComponent', () => {
  let component: PopularSchoolsComponent;
  let fixture: ComponentFixture<PopularSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
