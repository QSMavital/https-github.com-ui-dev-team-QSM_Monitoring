import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriesCardComponent } from './accesories-card.component';

describe('AccesoriesCardComponent', () => {
  let component: AccesoriesCardComponent;
  let fixture: ComponentFixture<AccesoriesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoriesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
