import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAmIWorthComponent } from './what-am-i-worth.component';

describe('WhatAmIWorthComponent', () => {
  let component: WhatAmIWorthComponent;
  let fixture: ComponentFixture<WhatAmIWorthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatAmIWorthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatAmIWorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
