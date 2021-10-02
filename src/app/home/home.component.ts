import { Component, OnInit } from '@angular/core';
import { Homepage } from '../interfaces/homepage.interface';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  adv: any;
  carousels: any;
  change: any;
  salary: any;
  experience: any;
  best: any;
  constructor(private homepageServ: HomepageService) { }

  ngOnInit(): void {
    this.homepageServ.getLatest().subscribe(
      (homepage: Homepage) => {
        if(homepage) {
          this.adv = homepage.adv;
          this.carousels = homepage.carousels;
          this.change = homepage.change;
          this.salary = homepage.salary;
          this.experience = homepage.experience;
          this.best = homepage.best;
        }
        
      }
    );
  }

}
