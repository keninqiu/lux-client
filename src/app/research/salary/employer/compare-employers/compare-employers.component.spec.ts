import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareEmployersComponent } from './compare-employers.component';

describe('CompareEmployersComponent', () => {
  let component: CompareEmployersComponent;
  let fixture: ComponentFixture<CompareEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
