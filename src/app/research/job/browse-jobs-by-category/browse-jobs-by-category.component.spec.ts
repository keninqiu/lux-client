import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseJobsByCategoryComponent } from './browse-jobs-by-category.component';

describe('BrowseJobsByCategoryComponent', () => {
  let component: BrowseJobsByCategoryComponent;
  let fixture: ComponentFixture<BrowseJobsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseJobsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseJobsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
