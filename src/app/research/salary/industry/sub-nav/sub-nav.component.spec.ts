import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySubNavComponent } from './sub-nav.component';

describe('IndustrySubNavComponent', () => {
  let component: IndustrySubNavComponent;
  let fixture: ComponentFixture<IndustrySubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrySubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrySubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
