import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../Service/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[]=[];


  constructor(private countriesService: CountriesService) {

  }
  searchByCountry(term: string){

    this.countriesService.SearchCountry(term).subscribe(res =>{

      this.countries = res;
    });
  }
}
