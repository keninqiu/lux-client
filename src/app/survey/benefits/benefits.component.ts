import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: [
    './benefits.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class BenefitsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigate(['/survey/education']);
  }
}
