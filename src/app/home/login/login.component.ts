import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth2.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  return: string;
  email: string;
  password: string;

  constructor(
    private authServ: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      console.log(params); // { orderby: "price" }
      this.return = params.params.return;
      console.log('this.return=', this.return);
    });
  }

  login() {
    const data = {
      email: this.email,
      password: this.password,
      confirmPassword: this.password
    };
    this.authServ.login(data).subscribe(
      (ret: any) => {
        const token = ret.token;
        localStorage.setItem('token', token);
        let retUrl = this.return ? this.return : '/survey/price-a-job';
        this.router.navigate([retUrl]);
      }
    );
  }
}
