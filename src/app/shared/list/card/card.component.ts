import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.scss', 
  ]
})
export class ListCardComponent implements OnInit{
    @Input() title: string;
    @Input() description: string;
    @Input() items: any;
    itemsArray: any;
    constructor() {

    }
    ngOnInit() {
        this.itemsArray = [];
        for(let i = 0; i < this.items.length / 3; i++) {
           const arr = [this.items[i*3]];
           if(i*3 + 1 < this.items.length) {
               arr.push(this.items[i*3 + 1]);
           }
           if(i*3 + 2 < this.items.length) {
               arr.push(this.items[i*3 + 2]);
           }
           this.itemsArray.push(arr);
        }
    }

    getUrl(url: string) {
      if(url.indexOf('/research/') !== 0) {
        return url;
      }
      return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    }
}