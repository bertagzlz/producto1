import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../models/song.model';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.html',
  styleUrls: ['./song-detail.scss']
})
export class SongDetail implements OnInit {
  // se puede manipular desde el padre PROPIEDAD DE ENTRADA
  @Input() viewMode = false;
  @Input() currentSong: Song = { id: 0, titulo: '', autor: '', ano: 0, disco: '', estilo: '', previewUrl: '', };
  message = '';
  msg = 'Mostrar';
  please = 'Please click on a Song...';
  // tslint:disable-next-line:typedef
  toggle() {
    this.msg = this.viewMode ? 'Mostrar' : 'Ocultar';
    this.viewMode = !this.viewMode;
  }
  // tslint:disable-next-line:typedef
  /*show() {
    this.visible = true;
  }*/
  constructor() { }
  ngOnInit(): void {}
  updateSong(): void {
    this.message = 'This song was not updated successfully!';
  }
}

