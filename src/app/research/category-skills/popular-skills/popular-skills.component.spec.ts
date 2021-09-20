import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryPopularSkillsComponent } from './popular-skills.component';

describe('CateogryPopularSkillsComponent', () => {
  let component: CateogryPopularSkillsComponent;
  let fixture: ComponentFixture<CateogryPopularSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryPopularSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryPopularSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
