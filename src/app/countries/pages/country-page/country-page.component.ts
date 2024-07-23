import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../Service/countries.service';
import { Subscriber, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private countrisService: CountriesService){

  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.countrisService.searchCountryByAlphaCode(id)),
  ).subscribe(country => {
    if (!country){
      return this.router.navigateByUrl('');
    }
    this.country = country;
    return;
  });


  }

}
