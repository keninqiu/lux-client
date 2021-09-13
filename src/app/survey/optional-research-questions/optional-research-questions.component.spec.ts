import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalResearchQuestionsComponent } from './optional-research-questions.component';

describe('OptionalResearchQuestionsComponent', () => {
  let component: OptionalResearchQuestionsComponent;
  let fixture: ComponentFixture<OptionalResearchQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalResearchQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalResearchQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
