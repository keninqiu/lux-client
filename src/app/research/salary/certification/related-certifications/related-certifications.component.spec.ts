import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCertificationsComponent } from './related-certifications.component';

describe('RelatedCertificationsComponent', () => {
  let component: RelatedCertificationsComponent;
  let fixture: ComponentFixture<RelatedCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
