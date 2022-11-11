import { Injectable } from '@angular/core';
import { Juego } from '../models/juegos.model';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  getJuegos(): Juego[] {
    return [
      {
        id: 1,
        title: 'Grand theft auto 5',
        price: 899,
        image: 'assets/juegos/gta5.jpg',
        description:
          // eslint-disable-next-line max-len
          'GTA V (Grand Theft Auto V) para PS4, PS3, Xbox One, Xbox 360 y PC es la quinta entrega numerada de la saga superventas de Rockstar Games. Se trata de una aventura de acción de mundo abierto con multitud de misiones en la que encarnamos a tres personajes distintos: Trevor, Michael y Franklin.',
      },
      {
        id: 2,
        title: 'Back 4 Blood',
        price: 549,
        image: 'assets/juegos/back.jpg',
        description:
          // eslint-disable-next-line max-len
          'Back 4 Blood es un emocionante juego de disparos en primera persona con una intensa campaña narrativa cooperativa para 4 jugadores, un modo multijugador competitivo como humano o infectado, y una experiencia de juego que te mantendrá en medio de la acción. Para Xbox, PC y Playstation.',
      },
      {
        id: 3,
        title: 'Chess Ultra',
        price: 891,
        image: 'assets/juegos/chess.jpg',
        description:
          // eslint-disable-next-line max-len
          'Chess Ultra ofrece un impresionante apartado gráfico, un multijugador en línea sin interrupciones y una IA aprobada por Grandes Maestros que ofrece la experiencia de ajedrez definitiva, para  Xbox One, Switch y PC',
      },
      {
        id: 4,
        title: 'NERF Legends',
        price: 747,
        image: 'assets/juegos/nerf.jpg',
        description:
          // eslint-disable-next-line max-len
          'NERF Legends te adentra en un mundo futurista y de ciencia ficción donde te enfrentarás con legiones de enemigos robots y a sus maestros definitivos. Para Nintendo Switch, PlayStation 4, Xbox One, Microsoft Windows',
      },
      {
        id: 5,
        title: 'Outriders',
        price: 539,
        image: 'assets/juegos/out.gif',
        description:
          // eslint-disable-next-line max-len
          'Outriders es un videojuego de rol en tercera persona de acción cooperativa solo en línea desarrollado por People Can Fly y publicado por la subsidiaria europea de Square Enix. Para Xbox, PC y Playstation',
      },
      {
        id: 6,
        title: 'Fall Guys: Ultimate Knockout',
        price: 220,
        image: 'assets/juegos/fall.jpg',
        description:
          // eslint-disable-next-line max-len
          'Fall Guys: Ultimate Knockout es un plataformas multijugador masivo tipo party con hasta 60 jugadores online a cargo de Mediatonic y Devolver Digital para PC, PlayStation 4, Xbox One y Switch, en un enfrentamiento todos contra todos que se desarrolla ronda tras ronda entre un caos creciente hasta que solo queda un único ',
      },
    ];
  }

  getJuego(id: number): Juego {
    return this.getJuegos().find((juego) => juego.id === id);
  }
}
