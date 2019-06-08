import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-slider';
  //images : any[] = ['/assets/1.jpg', '/assets/3.jpg', '/assets/4.jpg'];

  images: any[] = ['http://www.fullhdwpp.com/wp-content/uploads/Cat-and-dog.jpg',
    'https://wallpaper21.com/wp-content/uploads/2017/08/dog-hd-cat-backgrounds-full-hd-animal-wallpaper-wpt7803807.jpg',
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'https://material.angular.io/assets/img/examples/shiba1.jpg']
}
