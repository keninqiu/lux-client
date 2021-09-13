import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseIndustriesByCategoryComponent } from './browse-industries-by-category.component';

describe('BrowseIndustriesByCategoryComponent', () => {
  let component: BrowseIndustriesByCategoryComponent;
  let fixture: ComponentFixture<BrowseIndustriesByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseIndustriesByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseIndustriesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
