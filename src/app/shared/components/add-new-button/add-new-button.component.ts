import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-button',
  templateUrl: './add-new-button.component.html',
  styles: [
  ]
})
export class AddNewButtonComponent implements OnInit {

  @Input() title: string;
  @Input() routerLink: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.title){
      this.title = "Add New";
    }
  }

}
