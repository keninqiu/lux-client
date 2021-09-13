import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-considerations',
  templateUrl: './special-considerations.component.html',
  styleUrls: [
    './special-considerations.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class SpecialConsiderationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  next() {
    this.router.navigate(['/survey/employer']);
  }
}
