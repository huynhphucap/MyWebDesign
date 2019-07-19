import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/services/detail.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  constructor( private detailService: DetailService) { }

  dataDetail: Array<any>;
  ngOnInit() {
    this.detailService.getDetailFilm().subscribe( data => this.dataDetail = data);
    console.log(this.dataDetail)
  }

}
