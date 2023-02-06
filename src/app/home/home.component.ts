import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public listadeVideos: any = [];

  constructor(private RestService: RestService) {}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.RestService.get(
      'https://jsonplaceholder.typicode.com/photos'
    ).subscribe((respuesta) => {
      console.log(respuesta);
      this.listadeVideos = respuesta;
    });
  }
}
