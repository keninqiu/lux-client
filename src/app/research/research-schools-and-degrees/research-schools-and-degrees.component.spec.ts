import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchSchoolsAndDegreesComponent } from './research-schools-and-degrees.component';

describe('ResearchSchoolsAndDegreesComponent', () => {
  let component: ResearchSchoolsAndDegreesComponent;
  let fixture: ComponentFixture<ResearchSchoolsAndDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchSchoolsAndDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchSchoolsAndDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
