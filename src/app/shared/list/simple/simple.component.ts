import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-simple',
  templateUrl: './simple.component.html',
  styleUrls: [
    './simple.component.scss', 
  ]
})
export class ListSimpleComponent{
    @Input() title: string;
    @Input() items: any;
}