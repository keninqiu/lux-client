import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSubNavComponent } from './sub-nav.component';

describe('SkillSubNavComponent', () => {
  let component: SkillSubNavComponent;
  let fixture: ComponentFixture<SkillSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
