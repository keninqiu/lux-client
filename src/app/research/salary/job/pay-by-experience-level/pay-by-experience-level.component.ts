import { Component, OnInit, Input } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-pay-by-experience-level',
  templateUrl: './pay-by-experience-level.component.html',
  styleUrls: [
    './pay-by-experience-level.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class PayByExperienceLevelComponent implements OnInit {
  @Input() job: Job;
  readMore: boolean;
  constructor() { }
  public lineChartData: any = [
    { data: [], label: '' },
  ];

  ngOnInit(): void {
    this.readMore = false;
    this.lineChartData[0].data.push(
      this.job.byDimension.experience.entryLevel.avg,
      this.job.byDimension.experience.earlyCareer.avg,
      this.job.byDimension.experience.midCareer.avg,
      this.job.byDimension.experience.lateCareer.avg,
      this.job.byDimension.experience.experienced.avg
    );
    console.log('this.lineChartData=', this.lineChartData);
  }


  public lineChartLabels: Label[] = ['<1年', '1-4年', '5-9年', '10-19年', '20年以上'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

}
