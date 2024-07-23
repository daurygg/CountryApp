import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../Service/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[]=[];
public initialvalue: string ="";

  constructor(private countriesService: CountriesService) {

  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.Countries;
    this.initialvalue = this.countriesService.cacheStore.byCountries.term;
  }
  searchByCountry(term: string){

    this.countriesService.SearchCountry(term).subscribe(res =>{

      this.countries = res;
    });
  }
}
