import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: [
    './compensation.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class CompensationComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
    });
  }

  next() {
    this.router.navigate(['/survey/special-considerations']);
  }
}
