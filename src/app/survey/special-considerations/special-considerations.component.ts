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
  constructor(
    private surveyServ: SurveyService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      this.surveyServ.get(this.id).subscribe(
        (ret: any) => {
          console.log('ret===', ret);
        }
      );
    });
  }
  next() {
    this.router.navigate(['/survey/employer']);
  }
}
