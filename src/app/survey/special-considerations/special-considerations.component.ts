import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-special-considerations',
  templateUrl: './special-considerations.component.html',
  styleUrls: [
    './special-considerations.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class SpecialConsiderationsComponent implements OnInit {
  id: string;
  job: any;
  avgYears: number;
  minYears: number;
  education: string;
  skills: any[];
  contractStatus: string;
  certifications: any[];
  isSupervisor: boolean;
  constructor(
    private surveyServ: SurveyService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.skills = [];
    this.certifications = [];
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      this.surveyServ.get(this.id).subscribe(
        (ret: any) => {
          console.log('ret===', ret);
          this.job = ret;
        }
      );
    });
  }

  setContractStatus(status: string) {
    this.contractStatus = status;
  }

  next() {
    const data = {
      avgYears: this.avgYears,
      minYears: this.minYears,
      education: this.education,
      skills: this.skills ? this.skills.map(item => item.namet.zh) : '',
      certifications: this.certifications,
      contractStatus: this.contractStatus,
      isSupervisor: this.isSupervisor
    }
    this.router.navigate(['/survey/employer']);
  }

  clickSkill(skill: any) {
    if(this.skills.indexOf(skill) >= 0) {
      this.skills.splice(this.skills.indexOf(skill), 1);
    } else {
      this.skills.push(skill);
    }
  }

  checkSupervisor(b: boolean) {
    this.isSupervisor = b;
  }

  clickCertification(certification: any) {
    if(this.certifications.indexOf(certification) >= 0) {
      this.certifications.splice(this.certifications.indexOf(certification), 1);
    } else {
      this.certifications.push(certification);
    }
  }
}
