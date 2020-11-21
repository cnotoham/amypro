import { Component, OnInit } from '@angular/core';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-key-feature',
  templateUrl: './key-feature.component.html',
  styleUrls: ['./key-feature.component.scss']
})
export class KeyFeatureComponent implements OnInit {

  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
