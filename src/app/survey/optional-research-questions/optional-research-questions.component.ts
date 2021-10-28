import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-optional-research-questions',
  templateUrl: './optional-research-questions.component.html',
  styleUrls: [
    './optional-research-questions.component.scss'
  ]
})
export class OptionalResearchQuestionsComponent implements OnInit {
  id: string;

  jobSatisfaction: string;
  jobStress: string;
  jobMeaning: string;
  remoteWorkExpectations: string;
  isParent: boolean;
  jobSatisfactionOptions = [
    '非常满意',
    '比较满意',
    '有点满意',
    '不满意',
    '我讨厌我的工作'
  ];
  jobStressOptions = [
    '压力很大',
    '相当有压力',
    '有点压力',
    '没有压力',
    '我的工作很放松'
  ];
  jobMeaningOptions = [
    '非常',
    '是的',
    '有点',
    '不是',
    '我的工作可能会让世界变得更糟'
  ];
  remoteWorkExpectationsOptions = [
    '是的，我希望更多雇主在我的领域提供远程工作选择。',
    '是的，我希望在我的领域提供远程工作选项的雇主会更少。',
    '我的期望没有改变。'
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
      jobSatisfaction: this.jobSatisfaction,
      jobStress: this.jobStress,
      jobMeaning: this.jobMeaning,
      remoteWorkExpectations: this.remoteWorkExpectations,
      isParent: this.isParent
    }

    this.surveyServ.update(this.id, data).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.router.navigate(['/survey/report']);
      }
    );   

  }
}
