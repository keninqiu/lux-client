import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: [
    './job.component.scss'
  ]
})
export class JobComponent implements OnInit {
  editCountry: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.editCountry = false;
  }

  next() {
    this.router.navigate(['/survey/compensation']);
  }
}
