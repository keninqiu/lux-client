import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: [
    './employer.component.scss'
  ]
})
export class EmployerComponent implements OnInit {
  id: string;
  isGovernmentContractor: boolean;
  employerType: string;
  employerProductActivity: string;
  employerName: string;
  averageSizeCompetitor: number;

  employerTypeOptions = [
    '公司',
    '学院 / 大学',
    '承包商',
    '合伙人',
    '基金会/信托',
    '加盟商',
    '政府 - 联邦',
    '政府 - 州 和 本地',
    '医院',
    '军队',
    '非盈利机构',
    '私人执业/公司',
    '学校/学区',
    '自雇',
    '团队',
    '其他组织'
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
      employerType: this.employerType,
      employerProductActivity: this.employerProductActivity,
      employerName: this.employerName,
      averageSizeCompetitor: this.averageSizeCompetitor,
      isGovernmentContractor: this.isGovernmentContractor
    }

    this.surveyServ.update(this.id, data).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.router.navigate(['/survey/' + this.id + '/benefits']);
      }
    );  

  }

  setIsGovernmentContractor(b: boolean) {
    this.isGovernmentContractor = b;
  }
}
