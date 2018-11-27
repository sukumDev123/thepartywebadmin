import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPartyComponent } from './selected-party.component';

describe('SelectedPartyComponent', () => {
  let component: SelectedPartyComponent;
  let fixture: ComponentFixture<SelectedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
