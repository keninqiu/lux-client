import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestInClassComponent } from './best-in-class.component';

describe('BestInClassComponent', () => {
  let component: BestInClassComponent;
  let fixture: ComponentFixture<BestInClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestInClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestInClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
