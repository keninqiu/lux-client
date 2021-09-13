import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAboutEmployersComponent } from './learn-about-employers.component';

describe('LearnAboutEmployersComponent', () => {
  let component: LearnAboutEmployersComponent;
  let fixture: ComponentFixture<LearnAboutEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnAboutEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAboutEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
