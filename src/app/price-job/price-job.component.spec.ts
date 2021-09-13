import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceJobComponent } from './price-job.component';

describe('PriceJobComponent', () => {
  let component: PriceJobComponent;
  let fixture: ComponentFixture<PriceJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
