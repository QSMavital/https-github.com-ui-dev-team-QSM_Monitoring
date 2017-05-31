import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgTranslateMapComponent } from './ag-translate-map.component';

describe('AgTranslateMapComponent', () => {
  let component: AgTranslateMapComponent;
  let fixture: ComponentFixture<AgTranslateMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgTranslateMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTranslateMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
