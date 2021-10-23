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
  selectedSkills: string[];
  selectedCertifications: string[];
  contractStatus: string;
  isSupervisor: boolean;

  skillOptions = [];
  certificationOptions = [];
  constructor(
    private surveyServ: SurveyService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  educationOptions = [
    '没有学位',
    '副学士学位',
    '学士学位',
    '其他',
    '高中文凭',
    '非学位证书课程',
    '硕士学位 (非工商管理硕士)',
    '工商管理硕士',
    '法学学位（法学博士、法学硕士）',
    '博士学位',
    '卫生专业博士（MD、DMD、DVM、DPT等）'
  ];

  contractTypeOptions = [
    '我不是承包商',
    '我是独立承包商',
    '是的，我是通过代理签约的',
    '是的，我是通过供应商协议签约的'
  ];
  
  ngOnInit(): void {
    this.selectedSkills = [];
    this.selectedCertifications = [];
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      this.surveyServ.get(this.id).subscribe(
        (ret: any) => {
          console.log('ret===', ret);
          this.job = ret;
          this.skillOptions = this.job.skills.map(item => {
            let name = item.name;
            if(item.namet && item.namet.zh) {
              name = item.namet.zh
            }
            return name;
          });

          this.certificationOptions = this.job.certifications.map(item => {
            let name = item.name;
            if(item.namet && item.namet.zh) {
              name = item.namet.zh
            }
            return name;
          });
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
