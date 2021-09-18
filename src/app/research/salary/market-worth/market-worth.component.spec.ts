import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketWorthComponent } from './market-worth.component';

describe('MarketWorthComponent', () => {
  let component: MarketWorthComponent;
  let fixture: ComponentFixture<MarketWorthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketWorthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketWorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
