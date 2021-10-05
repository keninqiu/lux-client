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
    pos: number = 1;
    posIndicator: number = 0;
    moveLeft() {
      this.pos = this.pos + 182;
      this.posIndicator = this.posIndicator + 20;
    }

    moveRight() {
      this.pos = this.pos - 182;
      this.posIndicator = this.posIndicator - 20;
    }

    getUrl(url: string) {
      if(url.indexOf('/research/') !== 0) {
        return url;
      }
      return encodeURIComponent(url).replace('(','%28').replace(')','%29');
    }
}