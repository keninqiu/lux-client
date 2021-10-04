import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss', 
  ]
})
export class ListCarouselComponent{
    @Input() title: string;
    @Input() description: string;
    @Input() items: any;
}