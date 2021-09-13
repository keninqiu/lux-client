import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: [
    './verify-email.component.scss',
    '../../../assets/css/price-job/email-verification.min.css'
  ]
})
export class VerifyEmailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigate(['/survey/price-a-job']);
  }

  resend() {
    
  }
}
