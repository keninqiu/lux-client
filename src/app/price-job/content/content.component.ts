import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  return: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  employees: number;

  constructor(
    private authServ: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.employees = 0;
    this.route.queryParamMap.subscribe((params: any) => {
      console.log(params); // { orderby: "price" }
      this.return = params.params.return;
      console.log('this.return=', this.return);
    });
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
        this.authServ.isLoggedIn = true;
        let retUrl = this.return ? this.return : '/survey/price-a-job';

        this.router.navigate([retUrl]);
      }
    );
    
  }
}
