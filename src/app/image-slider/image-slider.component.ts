import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pmp-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() images: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.images)
  }
}
