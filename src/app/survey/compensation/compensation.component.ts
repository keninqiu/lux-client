import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  options = ['年薪', '小时工'];
  constructor(
    private surveyServ: SurveyService,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
    });
  }

  next() {
    const data = {
      compensationType: this.compensationType
    };
    this.surveyServ.update(this.id, data).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        this.router.navigate(['/survey/' + this.id + '/special-considerations']);
      }
    );
    
  }
}
