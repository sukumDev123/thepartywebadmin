import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBandComponent } from './song-band.component';

describe('SongBandComponent', () => {
  let component: SongBandComponent;
  let fixture: ComponentFixture<SongBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
