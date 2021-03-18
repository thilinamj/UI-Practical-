import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-icon',
  templateUrl: './letter-icon.component.html',
  styleUrls: ['./letter-icon.component.scss']
})
export class LetterIconComponent implements OnInit {

  @Input() dataLetters: string;
  @Input() cssClass: string;

  constructor() { }

  ngOnInit() {
    if (this.dataLetters) {
      const arr = this.dataLetters.split(' ');
      if (arr.length === 1) {
        this.dataLetters = this.dataLetters.substring(0, 2);
      } else {
        this.dataLetters = arr[0].substring(0, 1) + arr[1].substring(0, 1);
      }
    }
  }

}
