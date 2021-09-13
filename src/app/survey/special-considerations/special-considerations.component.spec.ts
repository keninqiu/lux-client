import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialConsiderationsComponent } from './special-considerations.component';

describe('SpecialConsiderationsComponent', () => {
  let component: SpecialConsiderationsComponent;
  let fixture: ComponentFixture<SpecialConsiderationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialConsiderationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialConsiderationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
