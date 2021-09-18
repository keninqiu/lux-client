import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/interfaces/job.interface';
import { School } from 'src/app/interfaces/school.interface';
import { SchoolService } from 'src/app/services/school.service';

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
  constructor(
    private route: ActivatedRoute,
    private schoolServ: SchoolService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryCode = params.get('countryCode');
      const type = params.get('type');
      const typeArr = type.split('=');
      this.typeName = typeArr[0];
      const typeValue = typeArr[1];
      this.salaryType = params.get('salaryType');

      if(this.typeName == 'School') {
        this.schoolServ.getByCountryCodeAndName(this.countryCode, typeValue).subscribe(
          (school:School) => {
            this.school = school;
          }
        );
      }
    });
  }

}
