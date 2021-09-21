import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeSubNavComponent } from './sub-nav.component';

describe('DegreeSubNavComponent', () => {
  let component: DegreeSubNavComponent;
  let fixture: ComponentFixture<DegreeSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
