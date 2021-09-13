import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: [
    './details.component.scss',
    '../../../../assets/css/market-worth/main.css'
  ]
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigate(['/survey/report']);
  }
}
