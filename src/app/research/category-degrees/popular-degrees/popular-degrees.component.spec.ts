import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryPopularDegreesComponent } from './popular-degrees.component';

describe('CateogryPopularDegreesComponent', () => {
  let component: CateogryPopularDegreesComponent;
  let fixture: ComponentFixture<CateogryPopularDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryPopularDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryPopularDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
