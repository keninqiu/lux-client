import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEmployersComponent } from './category-employers.component';

describe('CategoryEmployersComponent', () => {
  let component: CategoryEmployersComponent;
  let fixture: ComponentFixture<CategoryEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
