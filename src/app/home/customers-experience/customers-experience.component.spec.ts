import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersExperienceComponent } from './customers-experience.component';

describe('CustomersExperienceComponent', () => {
  let component: CustomersExperienceComponent;
  let fixture: ComponentFixture<CustomersExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
