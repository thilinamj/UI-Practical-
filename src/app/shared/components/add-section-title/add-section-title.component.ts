import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-section-title',
  templateUrl: './add-section-title.component.html',
  styles: [
  ]
})
export class AddSectionTitleComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
