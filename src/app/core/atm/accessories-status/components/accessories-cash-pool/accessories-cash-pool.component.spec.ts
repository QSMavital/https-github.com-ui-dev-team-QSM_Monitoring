import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesCashPoolComponent } from './accessories-cash-pool.component';

describe('AccessoriesCashPoolComponent', () => {
  let component: AccessoriesCashPoolComponent;
  let fixture: ComponentFixture<AccessoriesCashPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesCashPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesCashPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
