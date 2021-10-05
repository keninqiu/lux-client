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
    getUrl(url: string) {
      if(url.indexOf('/research/') !== 0) {
        return url;
      }
      return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    }
}