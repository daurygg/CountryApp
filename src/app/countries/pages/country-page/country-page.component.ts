import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../Service/countries.service';
import { Subscriber, switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private countrisService: CountriesService){

  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.countrisService.searchByAlphaCode(id)))
  }

}
