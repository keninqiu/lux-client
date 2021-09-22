import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDegreesComponent } from './popular-degrees.component';

describe('PopularDegreesComponent', () => {
  let component: PopularDegreesComponent;
  let fixture: ComponentFixture<PopularDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
