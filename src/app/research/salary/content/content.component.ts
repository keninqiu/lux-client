import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certification } from 'src/app/interfaces/certification.interface';
import { Degree } from 'src/app/interfaces/degree.interface';
import { Employer } from 'src/app/interfaces/employer.interface';
import { Industry } from 'src/app/interfaces/industry.interface';
import { Job } from 'src/app/interfaces/job.interface';
import { School } from 'src/app/interfaces/school.interface';
import { Skill } from 'src/app/interfaces/skill.interface';
import { CertificationService } from 'src/app/services/certification.service';
import { DegreeService } from 'src/app/services/degree.service';
import { EmployerService } from 'src/app/services/employer.service';
import { IndustryService } from 'src/app/services/industry.service';
import { JobService } from 'src/app/services/job.service';
import { SchoolService } from 'src/app/services/school.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.scss'
  ]
})
export class ContentComponent implements OnInit {
  countryCode: string;
  typeName: string;
  salaryType: string;
  school: School;
  job: Job;
  employer: Employer;
  certification: Certification;
  degree: Degree;
  skill: Skill;
  industry: Industry;

  constructor(
    private route: ActivatedRoute,
    private schoolServ: SchoolService,
    private jobServ: JobService,
    private employerServ: EmployerService,
    private certificationServ: CertificationService,
    private degreeServ: DegreeService,
    private skillServ: SkillService,
    private industryServ: IndustryService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryCode = params.get('countryCode');
      const type = params.get('type');
      const typeArr = type.split('=');
      this.typeName = typeArr[0];
      let typeValue = typeArr[1];

      typeValue = typeValue.replace(",", "%2C").replace("'", "%27").replace("/", "%2F");

      this.salaryType = params.get('salaryType');

      if(this.typeName == 'School') {
        this.schoolServ.getByCountryCodeAndSlug(this.countryCode, typeValue).subscribe(
          (school:School) => {
            this.school = school;
          }
        );
      } else
      if(this.typeName == 'Job') {
        this.jobServ.getByCountryCodeAndSlug(this.countryCode, typeValue).subscribe(
          (job:Job) => {
            this.job = job;
          }
        );        
      } else
      if(this.typeName == 'Employer') {
        this.employerServ.getByCountryCodeAndSlug(this.countryCode, typeValue).subscribe(
          (employer:Employer) => {
            console.log('employer====', employer);
            this.employer = employer;
          }
        );        
      } else
      if(this.typeName == 'Certification') {
        this.certificationServ.getByCountryCodeAndSlug(this.countryCode, typeValue).subscribe(
          (certification:Certification) => {
            console.log('ddd.certification=', certification);
            this.certification = certification;
          }
        );        
      } else
      if(this.typeName == 'Degree') {
        this.degreeServ.getByCountryCodeAndSlug(this.countryCode, typeValue).subscribe(
          (degree:Degree) => {
            this.degree = degree;
          }
        );        
      } else
      if(this.typeName == 'Skill') {
        this.skillServ.getByCountryCodeAndSlug(this.countryCode, typeValue).subscribe(
          (skill:Skill) => {
            this.skill = skill;
          }
        );        
      } else
      if(this.typeName == 'Industry') {
        this.industryServ.getByCountryCodeAndSlug(this.countryCode, typeValue).subscribe(
          (industry:Industry) => {
            this.industry = industry;
          }
        );        
      }
    });
  }

}
