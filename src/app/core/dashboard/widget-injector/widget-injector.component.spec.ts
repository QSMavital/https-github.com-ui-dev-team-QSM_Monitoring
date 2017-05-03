import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetInjectorComponent } from './widget-injector.component';

describe('WidgetInjectorComponent', () => {
  let component: WidgetInjectorComponent;
  let fixture: ComponentFixture<WidgetInjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetInjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
