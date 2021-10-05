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
    @Input() tableTitle: string;
    @Input() items: any;
    getUrl(url: string) {
      if(url.indexOf('/research/') !== 0) {
        return url;
      }
      return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    }
}