import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicList } from './music-list';

describe('MusicListComponent', () => {
  let component: MusicList;
  let fixture: ComponentFixture<MusicList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
