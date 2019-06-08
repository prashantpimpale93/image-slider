import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';
import { ZoomComponent } from '../zoom/zoom.component';

@Component({
  selector: 'pmp-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  public slideImages: any[] = [];
  public lastIndex: any = 0;
  public toolTipPosition: string = 'above';
  public warningMessage: string = 'End of images';

  @Input() images: any;

  constructor(private snackbar: MatSnackBar, private dialog : MatDialog ) {
  }

  ngOnInit() {
    this.slideImages.push(this.images[0]);
  }

  next() {
    if (this.lastIndex + 1 < this.images.length) {
      this.lastIndex = this.lastIndex + 1;
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      this.displayMessage(this.warningMessage);
      console.log(this.lastIndex, 'Sorry! Unable to find an item to display.');
    }
  }

  prev() {
    if (this.lastIndex - 1 >= 0) {
      this.lastIndex = this.lastIndex - 1;
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      this.displayMessage(this.warningMessage);
      console.log(this.lastIndex, 'Sorry! Unable to find an item to display.');
    }
  }

  displayMessage(message: string, action?: string) {
    this.snackbar.open(message, action ? action : '', {
      duration: 500
    });
  }

  onImageClick(imageUrl: string){
    this.dialog.open(ZoomComponent, {
      maxWidth: '600px',
      maxHeight: '550px',
      data : imageUrl
    });
  }
}
