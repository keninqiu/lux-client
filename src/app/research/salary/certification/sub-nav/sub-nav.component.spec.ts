import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationSubNavComponent } from './sub-nav.component';

describe('CertificationSubNavComponent', () => {
  let component: CertificationSubNavComponent;
  let fixture: ComponentFixture<CertificationSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
