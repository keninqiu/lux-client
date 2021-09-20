import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCertificationsComponent } from './category-certifications.component';

describe('CategoryCertificationsComponent', () => {
  let component: CategoryCertificationsComponent;
  let fixture: ComponentFixture<CategoryCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
