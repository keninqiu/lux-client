import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsDegreesComponent } from './schools-degrees.component';

describe('SchoolsDegreesComponent', () => {
  let component: SchoolsDegreesComponent;
  let fixture: ComponentFixture<SchoolsDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
