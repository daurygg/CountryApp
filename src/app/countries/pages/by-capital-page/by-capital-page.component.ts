import { Country } from '../../interfaces/country';
import { CountriesService } from './../../Service/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent{

  public countries: Country[]=[];
  constructor(private countriesService: CountriesService){

  }
  searchByCapital(term: string){

   this.countriesService.searchCapital(term).subscribe(res =>{
    this.countries = res;
   });
  }
}
