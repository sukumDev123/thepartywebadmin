import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerMsgComponent } from './handler-msg.component';

describe('HandlerMsgComponent', () => {
  let component: HandlerMsgComponent;
  let fixture: ComponentFixture<HandlerMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
