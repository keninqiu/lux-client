import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

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

    constructor(private utilServ: UtilService) {}    
    getUrl(url: string) {
      return this.utilServ.getUrl(url);
    }
}