import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsInventoryFilterComponent } from './atms-inventory-filter.component';

describe('AtmsInventoryFilterComponent', () => {
  let component: AtmsInventoryFilterComponent;
  let fixture: ComponentFixture<AtmsInventoryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsInventoryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsInventoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
