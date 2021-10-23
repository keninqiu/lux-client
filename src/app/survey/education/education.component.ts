import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: [
    './education.component.scss'
  ]
})
export class EducationComponent implements OnInit {
  id: string;
  age: number;
  gender: string;
  militaryExperience: boolean;
  roleBefore5Years: string;

  genderOptions = [
    '男',
    '女',
    '自定义'
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
      age: this.age,
      gender: this.gender,
      militaryExperience: this.militaryExperience,
      roleBefore5Years: this.roleBefore5Years
    }

    this.surveyServ.update(this.id, data).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.router.navigate(['/survey/' + this.id + '/optional-research-questions']);
      }
    ); 

  }
}
