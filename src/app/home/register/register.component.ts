import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/_alert';
import { AuthService } from 'src/app/services/auth2.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  return: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(
    private authServ: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertServ: AlertService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      console.log(params); // { orderby: "price" }
      this.return = params.params.return;
      console.log('this.return=', this.return);
    });
  }

  register() {
    if(this.password != this.confirmPassword) {
      this.alertServ.error('密码和确认密码不一致');
      console.log('not equal');
      return;
    }

    const data = {
      email: this.email,
      password: this.password,
      confirmPassword: this.password
    };
    this.authServ.signUp(data).subscribe(
      (ret: any) => {
        const token = ret.token;
        localStorage.setItem('token', token);
        let retUrl = this.return ? this.return : '/survey/choose';
        this.router.navigate([retUrl]);
      }
    );
  }
}
