import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optional-research-questions',
  templateUrl: './optional-research-questions.component.html',
  styleUrls: [
    './optional-research-questions.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class OptionalResearchQuestionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigate(['/survey/report']);
  }
}
