import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  data: Array<any> = [
    {label: 'Aladin', text: 'nội dung ở đây'},
    {label: 'Doremon', text: 'nội dung ở đây'},
    {label: 'Conan', text: 'nội dung ở đây'},
    {label: 'Aladin', text: 'nội dung ở đây'},
  ]
  ngOnInit() {
  }

}
