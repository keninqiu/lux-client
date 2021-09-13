import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: [
    './compensation.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class CompensationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigate(['/survey/special-considerations']);
  }
}
