import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/interfaces/survey.interface';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: [
    './compensation.component.scss'
  ]
})
export class CompensationComponent implements OnInit {
  id: string;
  compensationType: string;
  currencyCode: string;

  yearlyPay: number;
  salaryHoursPerWeek: string;
  hourlyPay: number;
  hoursPerWeek: number;

  hasBonus: boolean;
  annualBonus: number;
  hasProfitShare: boolean;
  profitShare: number;
  hasSalesCommissions: boolean;
  annualSalesCommissions: number;
  annualSalesVolume: number;

  options = ['年薪', '小时工'];
  constructor(
    private surveyServ: SurveyService,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.hasBonus = false;
    this.hasProfitShare = false;
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      this.surveyServ.get(this.id).subscribe(
        (survey: any) => {
          console.log('survey===', survey);
          this.currencyCode = survey?.city?.state?.country?.rawData.props.pageProps.pageData.currencyCode;
        }
      );
    });
  }

  next() {
    const data = {
      compensationType: this.compensationType,
      yearlyPay: this.yearlyPay,
      salaryHoursPerWeek: this.salaryHoursPerWeek,
      hourlyPay: this.hourlyPay,
      hoursPerWeek: this.hoursPerWeek,
      hasBonus: this.hasBonus,
      annualBonus: this.annualBonus,
      hasProfitShare: this.hasProfitShare,
      profitShare: this.profitShare,
      hasSalesCommissions: this.hasSalesCommissions,
      annualSalesCommissions: this.annualSalesCommissions,
      annualSalesVolume: this.annualSalesVolume
    };

    this.surveyServ.update(this.id, data).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.router.navigate(['/survey/' + this.id + '/special-considerations']);
      }
    );
    
  }
}
