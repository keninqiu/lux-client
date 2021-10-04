import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-table',
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.scss', 
  ]
})
export class ListTableComponent{
    @Input() title: string;
    @Input() description: string;
    @Input() items: any;
}