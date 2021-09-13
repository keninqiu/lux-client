import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCareerTipsAndAdviceComponent } from './get-career-tips-and-advice.component';

describe('GetCareerTipsAndAdviceComponent', () => {
  let component: GetCareerTipsAndAdviceComponent;
  let fixture: ComponentFixture<GetCareerTipsAndAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCareerTipsAndAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCareerTipsAndAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
