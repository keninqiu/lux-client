import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card-logo',
  templateUrl: './card-logo.component.html',
  styleUrls: [
    './card-logo.component.scss', 
  ]
})
export class ListCardLogoComponent implements OnInit{
    @Input() title: string;
    @Input() description: string;
    @Input() items: any;
    constructor() {

    }
    ngOnInit() {
    }
}