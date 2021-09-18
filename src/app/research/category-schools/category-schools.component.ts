import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { School } from 'src/app/interfaces/school.interface';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-category-schools',
  templateUrl: './category-schools.component.html',
  styleUrls: ['./category-schools.component.scss']
})
export class CategorySchoolsComponent implements OnInit {
  countryCode: string;
  categoryName: string;
  schools: School[];
  constructor(private route: ActivatedRoute, private schoolServ: SchoolService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categoryName = paramMap.get('categoryName').split('-').join(' ');
      this.schoolServ.getAllByCountryCodeAndCategoryName(this.countryCode, this.categoryName).subscribe(
        (schools: School[]) => {
          this.schools = schools;
          console.log('schools=', schools);
        }
      );
    });
  }

}
