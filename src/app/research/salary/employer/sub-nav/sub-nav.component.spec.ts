import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSubNavComponent } from './sub-nav.component';

describe('EmployerSubNavComponent', () => {
  let component: EmployerSubNavComponent;
  let fixture: ComponentFixture<EmployerSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
