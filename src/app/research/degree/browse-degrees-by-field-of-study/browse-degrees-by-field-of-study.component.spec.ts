import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseDegreesByFieldOfStudyComponent } from './browse-degrees-by-field-of-study.component';

describe('BrowseDegreesByFieldOfStudyComponent', () => {
  let component: BrowseDegreesByFieldOfStudyComponent;
  let fixture: ComponentFixture<BrowseDegreesByFieldOfStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseDegreesByFieldOfStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseDegreesByFieldOfStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
