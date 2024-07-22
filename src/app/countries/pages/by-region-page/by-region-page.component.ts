import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../Service/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

public countries: Country[] =[];

constructor(private countriesService: CountriesService){

}
searchByRegion(region : string) {
  this.countriesService.SearchRegion(region).subscribe(res=>{
    this.countries = res;
  });
}

}
