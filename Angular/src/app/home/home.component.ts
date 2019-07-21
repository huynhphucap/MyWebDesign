import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  data: Array<any> = [
    {label: 'Aladin', text: 'aaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay'},
    {label: 'Doremon', text: 'Norm Of The North 2: Keys To The Kingdom'},
    {label: 'Conan', text: 'The Lego Movie 2'},
    {label: 'Aladin', text: 'nội dung ở đây'},
    {label: 'Aladin', text: 'nội dung ở đây'},
    {label: 'Aladin', text: 'nội dung ở đây'},
    {label: 'Aladin', text: 'nội dung ở đây'},
    {label: 'Aladin', text: 'nội dung ở đây'},

  ]
  ngOnInit() {
  }

}
