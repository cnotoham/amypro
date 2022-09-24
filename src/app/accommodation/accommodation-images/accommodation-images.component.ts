import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccommodationDialogData } from '../accommodation-list/accommodation-list.component';

@Component({
  selector: 'app-accommodation-images',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    NgForOf,
    NgOptimizedImage,
  ],
  providers: [
    provideImgixLoader('https://amypro.com'),
  ],
  templateUrl: './accommodation-images.component.html',
  styleUrls: ['./accommodation-images.component.scss']
})
export class AccommodationImagesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: AccommodationDialogData) { }

  ngOnInit(): void {
  }

}
