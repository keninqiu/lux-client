import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: [
    './benefits.component.scss'
  ]
})
export class BenefitsComponent implements OnInit {

  id: string;
  vacationWeeks: number;
  hasHealthBenefit: boolean;
  remoteWork: string;
  otherBenefits: string[] = [];
  remoteWorkOptions = [
    '是的，百分之百时间可以远程办公',
    '是的，大部分时间可以远程办公',
    '是的，有时可以远程办公',
    '不能远程办公'
  ];
  otherBenefitOptions = [
    '休闲着装',
    '带薪休假',
    '带薪病假',
    '弹性时间',
    '401(k)'
  ];
  constructor(
    private surveyServ: SurveyService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
    });
  }

  next() {

    const data = {
      vacationWeeks: this.vacationWeeks,
      hasHealthBenefit: this.hasHealthBenefit,
      remoteWork: this.remoteWork,
      otherBenefits: this.otherBenefits
    }

    this.surveyServ.update(this.id, data).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.router.navigate(['/survey/' + this.id + '/education']);
      }
    );  

  }
}
