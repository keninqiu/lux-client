import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAJobComponent } from './price-a-job.component';

describe('PriceAJobComponent', () => {
  let component: PriceAJobComponent;
  let fixture: ComponentFixture<PriceAJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
