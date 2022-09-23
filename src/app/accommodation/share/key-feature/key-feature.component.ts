import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-key-feature',
  templateUrl: './key-feature.component.html',
  providers: [
    MatListModule,
    MatIconModule,
  ],
  styleUrls: ['./key-feature.component.scss']
})
export class KeyFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
