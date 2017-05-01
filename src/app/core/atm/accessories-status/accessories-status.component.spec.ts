import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesStatusComponent } from './accessories-status.component';

describe('AccessoriesStatusComponent', () => {
  let component: AccessoriesStatusComponent;
  let fixture: ComponentFixture<AccessoriesStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
