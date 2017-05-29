import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesOtherComponent } from './accessories-other.component';

describe('AccessoriesOtherComponent', () => {
  let component: AccessoriesOtherComponent;
  let fixture: ComponentFixture<AccessoriesOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
