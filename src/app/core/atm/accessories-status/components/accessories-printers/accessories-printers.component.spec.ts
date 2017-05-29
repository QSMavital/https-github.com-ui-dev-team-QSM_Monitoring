import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesPrintersComponent } from './accessories-printers.component';

describe('AccessoriesPrintersComponent', () => {
  let component: AccessoriesPrintersComponent;
  let fixture: ComponentFixture<AccessoriesPrintersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesPrintersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
