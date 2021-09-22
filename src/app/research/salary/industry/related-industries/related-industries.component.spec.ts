import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedIndustriesComponent } from './related-industries.component';

describe('RelatedIndustriesComponent', () => {
  let component: RelatedIndustriesComponent;
  let fixture: ComponentFixture<RelatedIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
