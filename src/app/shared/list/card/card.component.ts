import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.scss', 
  ]
})
export class ListCardComponent{
    @Input() title: string;
    @Input() description: string;
    @Input() items: any;
}