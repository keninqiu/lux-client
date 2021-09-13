import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByStatesComponent } from './browse-by-states.component';

describe('BrowseByStatesComponent', () => {
  let component: BrowseByStatesComponent;
  let fixture: ComponentFixture<BrowseByStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseByStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseByStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
