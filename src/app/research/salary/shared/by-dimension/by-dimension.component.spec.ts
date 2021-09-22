import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDimensionComponent } from './by-dimension.component';

describe('ByDimensionComponent', () => {
  let component: ByDimensionComponent;
  let fixture: ComponentFixture<ByDimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByDimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
