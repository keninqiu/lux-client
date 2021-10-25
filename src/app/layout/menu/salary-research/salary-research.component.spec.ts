import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryResearchComponent } from './salary-research.component';

describe('SalaryResearchComponent', () => {
  let component: SalaryResearchComponent;
  let fixture: ComponentFixture<SalaryResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
