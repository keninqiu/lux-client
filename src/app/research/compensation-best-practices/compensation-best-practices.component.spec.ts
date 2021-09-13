import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationBestPracticesComponent } from './compensation-best-practices.component';

describe('CompensationBestPracticesComponent', () => {
  let component: CompensationBestPracticesComponent;
  let fixture: ComponentFixture<CompensationBestPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationBestPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationBestPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
