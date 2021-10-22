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
  inputSkill: string;
  inputCertification: string;
  avgYears: number;
  minYears: number;
  education: string;
  selectedSkills: string[];
  selectedCertifications: string[];
  contractStatus: string;
  isSupervisor: boolean;
  constructor(
    private surveyServ: SurveyService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedSkills = [];
    this.selectedCertifications = [];
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

  onEnterSkill(event) {
    const value = event.target.value;
    this.selectedSkills.push(value);
    this.inputSkill = '';
  }

  onEnterCertification(event) {
    const value = event.target.value;
    this.selectedCertifications.push(value);
    this.inputCertification = '';
  }

  setContractStatus(status: string) {
    this.contractStatus = status;
  }

  deleteSkill(skill) {
    this.selectedSkills = this.selectedSkills.filter(item => item != skill);
  }

  deleteCertification(certification) {
    this.selectedCertifications = this.selectedCertifications.filter(item => item != certification);
  }

  next() {
    const data = {
      avgYears: this.avgYears,
      minYears: this.minYears,
      education: this.education,
      skills: this.selectedSkills,
      certifications: this.selectedCertifications,
      contractStatus: this.contractStatus,
      isSupervisor: this.isSupervisor
    }

    this.surveyServ.update(this.id, data).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.router.navigate(['/survey/' + this.id + '/employer']);
      }
    );    
  }

  clickSkill(skill: any) {
    const skillName = skill.namet ? skill.namet.zh : skill.name;
    if(this.selectedSkills.indexOf(skillName) >= 0) {
      this.selectedSkills = this.selectedSkills.filter(item => item != skillName);
    } else {
      this.selectedSkills.push(skillName);
    }
  }

  checkSupervisor(b: boolean) {
    this.isSupervisor = b;
  }

  clickCertification(certification: any) {
    const certificationName = certification.namet ? certification.namet.zh : certification.name;
    if(this.selectedCertifications.indexOf(certificationName) >= 0) {
      this.selectedCertifications = this.selectedCertifications.filter(item => item != certificationName);
    } else {
      this.selectedCertifications.push(certificationName);
    }
  }
}
