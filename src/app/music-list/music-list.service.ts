import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MusicList } from './music-list';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicListService {
  iTunesUrl = 'https://itunes.apple.com/search';
  musicList: Observable<MusicList[]>;

  constructor(private httpClient: HttpClient) { }

  getMusicList(queryString): Observable<MusicList[]> {
      if (!this.musicList) {
        this.musicList = this.httpClient.get<MusicList[]>(`${this.iTunesUrl}?term=${queryString}`).pipe(
          publishReplay(1),
          refCount()
        ); }
      return this.musicList;
  }
  clearCache(): void {
    this.musicList = null;
  }

}
