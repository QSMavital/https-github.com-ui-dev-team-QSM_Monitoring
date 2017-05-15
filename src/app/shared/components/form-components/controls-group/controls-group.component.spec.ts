import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsGroupComponent } from './controls-group.component';

describe('ControlsGroupComponent', () => {
  let component: ControlsGroupComponent;
  let fixture: ComponentFixture<ControlsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
