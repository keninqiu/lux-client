import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-data',
  templateUrl: './salary-data.component.html',
  styleUrls: ['./salary-data.component.scss']
})
export class SalaryDataComponent implements OnInit {
  slideIndex: number;
  interval: any;
  constructor() { }

  ngOnInit(): void {
    this.slideIndex = 0;
    this.interval = setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % 3;
    },4500);
  }

  changeSlideIndex(index: number) {
    this.slideIndex = index;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
