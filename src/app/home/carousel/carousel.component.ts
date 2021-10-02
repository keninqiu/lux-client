import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() carousels: any;
  interval: any;
  slideIndex: number;
  constructor() { }

  ngOnInit(): void {
    this.slideIndex = 0;
    this.interval = setInterval(() => {
      this.slideIndex = 1 - this.slideIndex;
    },4500);
  }

  changeSlideIndex(index: number) {
    this.slideIndex = index;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
