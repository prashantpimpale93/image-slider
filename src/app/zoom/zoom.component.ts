import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {

  public imageUrl: any;

  constructor(public thisDialog: MatDialogRef<ZoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
    this.imageUrl = data;
  }

  ngOnInit() {
  }

}
