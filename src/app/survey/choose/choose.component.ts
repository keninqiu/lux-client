import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: [
    './choose.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class ChooseComponent implements OnInit {
  type: string;
  constructor(private router: Router, private surveyServ: SurveyService) { }

  ngOnInit(): void {
  }

  select(type: string) {
    this.type = type;
    const body = {
      type
    };
    this.surveyServ.add(body).subscribe(
      (ret: any) => {
        console.log('ret==', ret);
        const id = ret._id;
        this.router.navigate(['/survey/' + id + '/job']);
      },
      (error: any) => {
        console.log('error==', error);
        this.router.navigate(['/login']);
      }
    );
    
  }
}
