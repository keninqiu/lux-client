import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaychartComponent } from './paychart.component';

describe('PaychartComponent', () => {
  let component: PaychartComponent;
  let fixture: ComponentFixture<PaychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
