import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryPopularCertificationsComponent } from './popular-certifications.component';

describe('CateogryPopularCertificationsComponent', () => {
  let component: CateogryPopularCertificationsComponent;
  let fixture: ComponentFixture<CateogryPopularCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryPopularCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryPopularCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
