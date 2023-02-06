import { RestService } from './../rest.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent {
  public respuesta: any = [];
  public comentarios: any = [];
  comentariosText: any;
  public form: any = FormGroup;

  constructor(
    private route: ActivatedRoute,
    private RestService: RestService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.cargarDataDetail(params.variable);
      this.cargarComentarios();
    });

    this.form = this.formBuilder.group({
      textAreaComentario: [''],
    });
  }

  cargarDataDetail(id: string) {
    this.RestService.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    ).subscribe((respuesta) => {
      this.respuesta = respuesta;
    });
  }

  public enviarData() {
    this.RestService.post(`https://jsonplaceholder.typicode.com/posts`, {
      text: this.form.value.textAreaComentario,
    }).subscribe((respuesta: any) => {
      console.log('comentario enviado', respuesta);
      this.form.reset();
      this.cargarComentarios();
    });
  }

  cargarComentarios() {
    this.RestService.get(
      'https://jsonplaceholder.typicode.com/posts'
    ).subscribe((respuesta) => {
      this.comentarios = respuesta;
    });
  }
}
