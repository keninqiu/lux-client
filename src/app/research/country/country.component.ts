import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { ParamMap } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  code: string;
  country: Country;
  jobItems: any;
  employerItems: any;
  schoolItems: any;
  categoryItems: any;

  constructor(
    private route: ActivatedRoute,
    private countryServ: CountryService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.code=params.get('countryCode');  

      this.categoryItems = [
        {
          text: '公司',
          url: '/research/' + this.code + '/Employer'
        },
        {
          text: '学位',
          url: '/research/' + this.code + '/Degree'
        },    
        {
          text: '工作',
          url: '/research/' + this.code + '/Job'
        },
        {
          text: '证书',
          url: '/research/' + this.code + '/Certification'
        },
        {
          text: '技能',
          url: '/research/' + this.code + '/Skill'
        },    
        {
          text: '行业',
          url: '/research/' + this.code + '/Industry'
        },      
        {
          text: '学校',
          url: '/research/' + this.code + '/School'
        }    
      ];


      this.countryServ.getByCode(this.code).subscribe(
        (country: Country) => {
          this.country = country;
          const byDimension = country.byDimension;
          if(byDimension) {
            if(byDimension.salaryByJob && byDimension.salaryByJob.length > 0) {
              this.jobItems = byDimension.salaryByJob.map(
                (item: any) => {
                  return {
                    title: item.job && item.job.namet ? item.job.namet.zh : item.name,
                    content: '平均年薪：' + (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
                    url: item.url
                  }
                }
              )
            } else 
            if(byDimension.hourlyRateByJob && byDimension.hourlyRateByJob.length > 0) {
              this.jobItems = byDimension.hourlyRateByJob.map(
                (item: any) => {
                  return {
                    title: item.job && item.job.namet ? item.job.namet.zh : item.name,
                    content: '平均时薪：' + (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
                    url: item.url
                  }
                }
              )
            }

            if(byDimension.salaryByEmployer && byDimension.salaryByEmployer.length > 0) {
              this.employerItems = byDimension.salaryByEmployer.map(
                (item: any) => {
                  return {
                    title: item.employer && item.employer.namet ? item.employer.namet.zh : item.name,
                    subtitle: '平均年薪',
                    content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
                    image: '/assets/images/employer-placeholder.png',
                    url: item.url
                  }
                }
              )
            } else 
            if(byDimension.hourlyRateByEmployer && byDimension.hourlyRateByEmployer.length > 0) {
              this.employerItems = byDimension.hourlyRateByEmployer.map(
                (item: any) => {
                  return {
                    title: item.employer && item.employer.namet ? item.employer.namet.zh : item.name,
                    subtitle: '平均时薪',
                    content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
                    image: '/assets/images/employer-placeholder.png',
                    url: item.url
                  }
                }
              )
            }  
            
            
            if(byDimension.salaryBySchool && byDimension.salaryBySchool.length > 0) {
              this.schoolItems = byDimension.salaryBySchool.map(
                (item: any) => {
                  return {
                    title: item.school && item.school.namet ? item.school.namet.zh : item.name,
                    subtitle: '平均年薪',
                    content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
                    image: '/assets/images/school-placeholder.png',
                    url: item.url
                  }
                }
              )
            } else 
            if(byDimension.hourlyRateBySchool && byDimension.hourlyRateBySchool.length > 0) {
              this.schoolItems = byDimension.hourlyRateBySchool.map(
                (item: any) => {
                  return {
                    title: item.school && item.school.namet ? item.school.namet.zh : item.name,
                    subtitle: '平均时薪',
                    content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
                    image: '/assets/images/school-placeholder.png',
                    url: item.url
                  }
                }
              )
            } 

          }

        }
      );
    });
  }

}
