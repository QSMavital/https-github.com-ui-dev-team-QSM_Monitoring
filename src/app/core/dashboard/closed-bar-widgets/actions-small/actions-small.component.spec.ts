import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsSmallComponent } from './actions-small.component';

describe('ActionsSmallComponent', () => {
  let component: ActionsSmallComponent;
  let fixture: ComponentFixture<ActionsSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
