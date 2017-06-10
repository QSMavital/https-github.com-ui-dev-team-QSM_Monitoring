import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsmLinkTableComponent } from './hsm-link-table.component';

describe('HsmLinkTableComponent', () => {
  let component: HsmLinkTableComponent;
  let fixture: ComponentFixture<HsmLinkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsmLinkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsmLinkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
