import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRelatedComponent } from './related.component';

describe('SharedRelatedComponent', () => {
  let component: SharedRelatedComponent;
  let fixture: ComponentFixture<SharedRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
