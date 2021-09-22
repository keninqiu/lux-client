import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedDegreesComponent } from './related-degrees.component';

describe('RelatedDegreesComponent', () => {
  let component: RelatedDegreesComponent;
  let fixture: ComponentFixture<RelatedDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
