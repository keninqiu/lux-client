import { Component, Input, OnInit } from '@angular/core';
import { Popular } from 'src/app/interfaces/popular.interface';
import { PopularService } from 'src/app/services/popular.service';

interface PopularItem {
  text: string;
  url: string;
}
@Component({
  selector: 'app-popular-searches',
  templateUrl: './popular-searches.component.html',
  styleUrls: [
    './popular-searches.component.scss',
    '../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../assets/css/research/d0672ccc0254cae98d85.css'   
  ]
})
export class PopularSearchesComponent implements OnInit {
  @Input() type: string;
  @Input() countryCode: string;
  showMore: boolean;
  @Input() items: PopularItem[];
  @Input() secondaryItems: PopularItem[];
  constructor(private popularServ: PopularService) { }

  ngOnInit(): void {
    /*
    this.popularServ.getByCountryCodeAndType(this.countryCode, this.type).subscribe(
      (popular: Popular) => {
        console.log('popular===', popular);
        if(popular && popular.rawData && popular.rawData.props && popular.rawData.props.pageProps && popular.rawData.props.pageProps.pageData) {
          this.items = popular.rawData.props.pageProps.pageData.items;
          this.secondaryItems = popular.rawData.props.pageProps.pageData.secondaryItems;
        }
        
      }
    );
    */
  }
  getUrl(url) {
    if(url.indexOf('/Salary') > 0 || url.indexOf('/Hourly_Rate') > 0 ) {
      const typeString = '/' + this.type + '=';
      const index1 = url.indexOf(typeString);
      const index2 = url.indexOf('/Salary') > 0 ? url.indexOf('/Salary') : url.indexOf('/Hourly_Rate');
      const slug = url.substring(index1 + typeString.length, index2);
      const newSlug = encodeURIComponent(slug).replace('(','%28').replace(')','%29');


      url = url.replace('=', '%3D').replace(slug, newSlug);

      return url;
    }
    const lastIndex = url.lastIndexOf('/');
    const slug = url.substring(lastIndex + 1);
    return '/research/' + this.countryCode + '/' + this.type + '/' + slug;
 }  
 toggleShowMore() {
   this.showMore = !this.showMore;
 }
}
