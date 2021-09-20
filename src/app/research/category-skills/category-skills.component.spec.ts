import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySkillsComponent } from './category-skills.component';

describe('CategorySkillsComponent', () => {
  let component: CategorySkillsComponent;
  let fixture: ComponentFixture<CategorySkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
