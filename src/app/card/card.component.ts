import { ServicioDeFavoritosService } from './../servicio-de-favoritos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() dataEntrante: any;
  public 'image': string;
  constructor(private servicioFavorito: ServicioDeFavoritosService) {}

  //ngonInit se ejecuta una sola vez cuando se inicializa el component
  ngOnInit(): void {
    // this.image = 'https://picsum.photos/536/354';
    // console.log('llamo a dataentrante:', this.dataEntrante);
  }

  agregarFavorito() {
    this.servicioFavorito.disparadorDeFavoritos.emit({
      data: this.dataEntrante,
    });
  }
}
