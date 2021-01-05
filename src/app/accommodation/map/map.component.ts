import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Slide } from '../slide';

export interface DialogData {
  placeId: string
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('iframe', { static: false }) iframe: ElementRef;

  placeId: string;
  slides: Slide[];
  mapUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  ngAfterViewInit(): void {
    this.iframe.nativeElement.src = this.mapUrl;
  }

  ngOnInit(): void {
    this.placeId = this.data.placeId;
    this.mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB-fryDJSSib6gDBQqjcDak7-FfbHFy0T4&q=place_id:${ this.placeId }`;
  }
}
