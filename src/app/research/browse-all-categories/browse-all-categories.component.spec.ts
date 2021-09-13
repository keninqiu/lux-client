import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllCategoriesComponent } from './browse-all-categories.component';

describe('BrowseAllCategoriesComponent', () => {
  let component: BrowseAllCategoriesComponent;
  let fixture: ComponentFixture<BrowseAllCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseAllCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
