export class Songs {
    private name: string;

    public songs: Array<any> = [
        {
            id: 1,
            numero: '01.',
            titulo: 'Dua Lipa-Break My Heart',
            autor: 'Dua Lipa.',
            longitud: '3.55',
            ano: 1997,
            disco: 'Elegants' ,
            estilo: 'funcky',
            previewUrl: 'assets/mp3/Break My Heart.mp3',
            img : 'assets/img/abba-100x100bb.jpg'
        },
        {
            id: 2,
            numero: '02.',
            titulo: 'Dua Lipa-Levitating',
            autor: 'Dua Lipa',
            longitud: '3.29',
            ano: 1967,
            disco: 'Liverpool concert' ,
            estilo: 'pop',
            previewUrl: 'assets/mp3/Levitating.mp3',
            img : 'assets/img/abba-100x100bb.jpg'
        },
        {
            id: 3,
            numero: '03.',
            titulo: 'Dua Lipa-Love Again',
            autor: 'Dua Lipa',
            longitud: '4.29',
            ano: 1937,
            disco: 'The Three Degrees' ,
            estilo: 'funk',
            previewUrl: 'assets/mp3/Love Again.mp3',
            img : 'assets/img/liane-100x100bb.png'
        }
    ];

    public constructor(name: string) {
        this.name = name;
    }
    public getSongs(): Array<any> {
        return this.songs;
    }
    public getName(): string {
        return this.name;
    }
}

const song = new Songs('Jane');

console.log(song.getName()); // person.name isn't accessible from outside the class since it's private
