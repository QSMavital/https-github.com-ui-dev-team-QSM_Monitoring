import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerActionsStatusComponent } from './issuer-actions-status.component';

describe('IssuerActionsStatusComponent', () => {
  let component: IssuerActionsStatusComponent;
  let fixture: ComponentFixture<IssuerActionsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerActionsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerActionsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
