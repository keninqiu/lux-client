import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIndustriesComponent } from './category-industries.component';

describe('CategoryIndustriesComponent', () => {
  let component: CategoryIndustriesComponent;
  let fixture: ComponentFixture<CategoryIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
