import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSkillsByCategoryComponent } from './browse-skills-by-category.component';

describe('BrowseSkillsByCategoryComponent', () => {
  let component: BrowseSkillsByCategoryComponent;
  let fixture: ComponentFixture<BrowseSkillsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseSkillsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseSkillsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
