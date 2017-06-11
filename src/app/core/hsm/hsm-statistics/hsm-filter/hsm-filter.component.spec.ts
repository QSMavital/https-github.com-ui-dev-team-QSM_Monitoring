import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsmFilterComponent } from './hsm-filter.component';

describe('HsmFilterComponent', () => {
  let component: HsmFilterComponent;
  let fixture: ComponentFixture<HsmFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsmFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsmFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
