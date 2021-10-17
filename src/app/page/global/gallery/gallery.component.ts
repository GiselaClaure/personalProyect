import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from '../models/friends.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() public gallery!:Gallery;

  constructor() { }

  ngOnInit(): void {
  }

}
