import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth2.service';

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

  email: string;
  password: string;
  firstName: string;
  lastName: string;
  employees: number;

  constructor(
    private authServ: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.password,
      employer: {
        employees: this.employees
      }
    };
    this.authServ.signUp(data).subscribe(
      (ret: any) => {
        this.router.navigate(['/survey/price-a-job']);
      }
    );
    
  }
}
