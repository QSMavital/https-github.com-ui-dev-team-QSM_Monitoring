import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgBooleanComponent } from './ag-boolean.component';

describe('AgBooleanComponent', () => {
  let component: AgBooleanComponent;
  let fixture: ComponentFixture<AgBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
