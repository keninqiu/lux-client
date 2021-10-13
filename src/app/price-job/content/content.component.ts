import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.scss',
    '../../../assets/css/price-job/pajSignup.css',
    '../../../assets/css/report/pxl.min.css'
  ]
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigate(['/survey/price-a-job']);
  }
}
