import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ZoomComponent } from './zoom/zoom.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { ImageSliderModule } from 'pmp-custom-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule
    ImageSliderModule
  ],
  providers: [],
  entryComponents: [ZoomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
