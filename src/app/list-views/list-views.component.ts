import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css'],
})
export class ListViewsComponent implements OnInit {
  @Input('mode') mode: string = 'page';
  @ViewChild('thumbnailUrlTmpl', { static: true })
  thumbnailUrlTmpl: TemplateRef<any>;
  @ViewChild('titleTmpl', { static: true })
  titleTmpl: TemplateRef<any>;
  @ViewChild('urlTmpl', { static: true })
  urlTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true })
  hdrTpl: TemplateRef<any>;

  data = [];
  cols = [];

  ColumnMode = ColumnMode;

  constructor(private RestService: RestService) {}

  ngOnInit() {
    this.cols = [
      {
        cellTemplate: this.thumbnailUrlTmpl,
        headerTemplate: this.hdrTpl,
        name: 'thumbnailUrl',
        maxWidth: 180,
      },
      {
        cellTemplate: this.titleTmpl,
        headerTemplate: this.hdrTpl,
        name: 'title',
      },
      {
        cellTemplate: this.urlTmpl,
        headerTemplate: this.hdrTpl,
        name: 'url',
      },
    ];

    this.cargarData();
  }

  cargarData(): void {
    this.RestService.get(
      `https://jsonplaceholder.typicode.com/photos`
    ).subscribe((data: any) => {
      this.data = data;
    });
  }
}
