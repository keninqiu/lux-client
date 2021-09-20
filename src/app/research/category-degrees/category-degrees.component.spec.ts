import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDegreesComponent } from './category-degrees.component';

describe('CategoryDegreesComponent', () => {
  let component: CategoryDegreesComponent;
  let fixture: ComponentFixture<CategoryDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
