import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  // private apiURL = 'https://api.unsplash.com/photos'
  
  // photos: any = {};
    
  // constructor(private http: Http) {
  //   this.getPhoto();
  // }
    
  // getData() {
  //   return this.http.get(this.apiURL).map((response: Response) => response.json())
  // }
    
  // getPhoto() {
  //   this.getData().subscribe((data) => {
  //     console.log(data);
  //     this.photos = data;
  //   })
  // }
}
