import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: [
    './skill.component.scss', 
    '../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../assets/css/research/d0672ccc0254cae98d85.css'
  ]
})
export class SkillComponent implements OnInit {
  countryCode: string;
  categories: Category[];
  items: any;
  secondaryItems: any;

  constructor(private route: ActivatedRoute, private categoryServ: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');

      this.categoryServ.getAllByCountryCodeAndType(this.countryCode, 'Skill').subscribe(
        (categories: Category[]) => {
          if(categories && categories.length > 0) {
            this.categories = categories;
            this.items = categories.filter(item => item.popular == 2);
            this.secondaryItems = categories.filter(item => item.popular == 1);
          }

        }
      );
    });
  }

}
