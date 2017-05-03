import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsStatusComponent } from './actions-status.component';

describe('ActionsStatusComponent', () => {
  let component: ActionsStatusComponent;
  let fixture: ComponentFixture<ActionsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
