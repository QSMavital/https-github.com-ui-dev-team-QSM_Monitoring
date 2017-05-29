import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesBalanceStrokesComponent } from './accessories-balance-strokes.component';

describe('AccessoriesBalanceStrokesComponent', () => {
  let component: AccessoriesBalanceStrokesComponent;
  let fixture: ComponentFixture<AccessoriesBalanceStrokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesBalanceStrokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesBalanceStrokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
