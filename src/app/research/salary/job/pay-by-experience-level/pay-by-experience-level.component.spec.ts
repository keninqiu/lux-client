import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayByExperienceLevelComponent } from './pay-by-experience-level.component';

describe('PayByExperienceLevelComponent', () => {
  let component: PayByExperienceLevelComponent;
  let fixture: ComponentFixture<PayByExperienceLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayByExperienceLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayByExperienceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
