import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture-general',
  templateUrl: './profile-picture-general.component.html',
  styles: [
  ]
})
export class ProfilePictureGeneralComponent implements OnInit {

  @Input() imagePath: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
