import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourMarketWorthComponent } from './find-your-market-worth.component';

describe('FindYourMarketWorthComponent', () => {
  let component: FindYourMarketWorthComponent;
  let fixture: ComponentFixture<FindYourMarketWorthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindYourMarketWorthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindYourMarketWorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
