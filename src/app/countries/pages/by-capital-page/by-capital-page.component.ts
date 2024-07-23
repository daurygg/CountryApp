import { Country } from '../../interfaces/country';
import { CountriesService } from './../../Service/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent implements OnInit{

  public isloading: boolean = false;
  public countries: Country[]=[];
  public initialvalue: string ='';

  constructor(private countriesService: CountriesService){

  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.Countries;
    this.initialvalue = this.countriesService.cacheStore.byCapital.term;
  }
  searchByCapital(term: string){
    this.isloading = true;
   this.countriesService.searchCapital(term).subscribe(res =>{
    this.countries = res;
    this.isloading = false;
   });
  }
}
