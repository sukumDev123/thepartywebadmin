import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyHandlerComponent } from './party-handler.component';

describe('PartyHandlerComponent', () => {
  let component: PartyHandlerComponent;
  let fixture: ComponentFixture<PartyHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
