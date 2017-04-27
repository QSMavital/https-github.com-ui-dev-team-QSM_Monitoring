import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingPanelComponent } from './sliding-panel.component';

describe('SlidingPanelComponent', () => {
  let component: SlidingPanelComponent;
  let fixture: ComponentFixture<SlidingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
