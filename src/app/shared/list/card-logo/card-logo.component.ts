import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card-logo',
  templateUrl: './card-logo.component.html',
  styleUrls: [
    './card-logo.component.scss', 
  ]
})
export class ListCardLogoComponent{
    @Input() title: string;
    @Input() description: string;
    @Input() items: any;

    getUrl(url: string) {
      if(url.indexOf('/research/') !== 0) {
        return url;
      }
      return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    }
}