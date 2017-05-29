import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesChecksComponent } from './accessories-checks.component';

describe('AccessoriesChecksComponent', () => {
  let component: AccessoriesChecksComponent;
  let fixture: ComponentFixture<AccessoriesChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
