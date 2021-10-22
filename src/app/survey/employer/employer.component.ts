import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: [
    './employer.component.scss',
    '../../../assets/css/market-worth/main.css'
  ]
})
export class EmployerComponent implements OnInit {
  id: string;
  isGovernmentContractor: boolean;
  employerType: string;
  employerProductActivity: string;
  employerName: string;
  averageSizeCompetitor: number;

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
      employerType: this.employerType,
      employerProductActivity: this.employerProductActivity,
      employerName: this.employerName,
      averageSizeCompetitor: this.averageSizeCompetitor,
      isGovernmentContractor: this.isGovernmentContractor
    }

    this.surveyServ.update(this.id, data).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.router.navigate(['/survey/' + this.id + '/benefits']);
      }
    );  

  }

  setIsGovernmentContractor(b: boolean) {
    this.isGovernmentContractor = b;
  }
}
