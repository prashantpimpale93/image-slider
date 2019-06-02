import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pmp-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() images: any;

  public slideImages: any[] = [];
  public lastIndex: any = 0;

  constructor() {
  }

  ngOnInit() {
    this.slideImages.push(this.images[0]);
  }

  next() {
    if (this.lastIndex + 1 < this.images.length) {
      this.lastIndex = this.lastIndex + 1;
      console.log(this.lastIndex, 'We have got an item in the array!');
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      console.log(this.lastIndex, 'Sorry! Unable to find an item to display.');
    }
  }

  prev() {
    if (this.lastIndex -1 >= 0) {
      this.lastIndex = this.lastIndex - 1;
      console.log(this.lastIndex, 'We have got an item in the array!');
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      console.log(this.lastIndex, 'Sorry! Unable to find an item to display.');
    }
  }
}
