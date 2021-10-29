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
  currencyCode: string;

  totalPay: number;
  baseSalary: number;

  min: number;
  max: number;
  avg: number;

  annualBonus: number;
  annualSalesCommissions: number;
  difference: number;
  constructor(private surveyServ: SurveyService) { }

  ngOnInit(): void {
    this.min = 0;
    this.max = 0;
    this.avg = 0;
    this.difference = 0;
    this.remaining = 5;
    this.surveyServ.getAll().subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.surveys = ret;
        this.selectedSurvey = ret[0];
        this.remaining = 5 - this.surveys.length;
        this.getSurveyDetail();
      }
    );
  }

  select(survey: any) {
    this.selectedSurvey = survey;
    this.getSurveyDetail();
  }

  getSurveyDetail() {
    const survey = this.selectedSurvey;
    this.currencyCode = survey?.city?.state?.country?.rawData.props.pageProps.pageData.currencyCode;
    if(survey.compensationType == '年薪') {
      this.baseSalary = survey.yearlyPay;
    } else {
      this.baseSalary = survey.hourlyPay * survey.hoursPerWeek * 52;
    }
    this.annualBonus = survey.annualBonus ? survey.annualBonus : 0;
    this.annualSalesCommissions = survey.annualSalesCommissions ? survey.annualSalesCommissions : 0;
    this.totalPay = this.baseSalary + this.annualBonus + this.annualSalesCommissions;
    const compensation = survey.job?.compensation;
    if(compensation) {
      const total = compensation.total;
      if(total) {
        if(total.min) {
          this.min = total.min;
        }
        if(total.max) {
          this.max = total.max;
        }
        if(total.avg) {
          this.avg = total.avg;
          this.difference = Number(((this.totalPay > this.avg) ? (this.totalPay - this.avg) : (this.avg - this.totalPay)).toFixed(0));
        }
      }

    }
  }
}
