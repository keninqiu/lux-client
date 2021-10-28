import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: [
    './report.component.scss',
    '../../../assets/css/report/pxl.min.css',
    '../../../assets/css/report/reports.css'
  ]
})
export class ReportComponent implements OnInit {
  surveys: any;
  selectedSurvey: any;
  remaining: number;
  constructor(private surveyServ: SurveyService) { }

  ngOnInit(): void {
    this.remaining = 5;
    this.surveyServ.getAll().subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.surveys = ret;
        this.selectedSurvey = ret[0];
        this.remaining = 5 - this.surveys.length;
      }
    );
  }

}
