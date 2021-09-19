import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThisSchoolComponent } from './about-this-school.component';

describe('AboutThisSchoolComponent', () => {
  let component: AboutThisSchoolComponent;
  let fixture: ComponentFixture<AboutThisSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutThisSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutThisSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
