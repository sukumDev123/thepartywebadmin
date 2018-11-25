import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaltionComponent } from './localtion.component';

describe('LocaltionComponent', () => {
  let component: LocaltionComponent;
  let fixture: ComponentFixture<LocaltionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaltionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaltionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
