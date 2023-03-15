import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetail } from './song-detail';

describe('SongDetailComponent', () => {
  let component: SongDetail;
  let fixture: ComponentFixture<SongDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongDetail ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
