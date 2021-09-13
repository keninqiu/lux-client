import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-a-job',
  templateUrl: './price-a-job.component.html',
  styleUrls: [
    './price-a-job.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class PriceAJobComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    console.log('go details');
    this.router.navigate(['/survey/price-a-job/details']);
  }
}
