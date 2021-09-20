import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSchoolsByCategoryComponent } from './browse-schools-by-category.component';

describe('BrowseSchoolsByCategoryComponent', () => {
  let component: BrowseSchoolsByCategoryComponent;
  let fixture: ComponentFixture<BrowseSchoolsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseSchoolsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseSchoolsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
