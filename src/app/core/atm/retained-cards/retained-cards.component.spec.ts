import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetainedCardsComponent } from './retained-cards.component';

describe('RetainedCardsComponent', () => {
  let component: RetainedCardsComponent;
  let fixture: ComponentFixture<RetainedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetainedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetainedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
