
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Region } from '../interfaces/Region.type';
import { CacheStore } from '../interfaces/cache-store.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private Url: string ='https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital:   {term: '', Countries:[]},
    byCountries: {term: '', Countries:[]},
    byRegion:    {region:'', Countries:[]}
    };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }


  private saveToLocalStorage():void{
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage():void{
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  };
  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    const url = `${ this.Url }/alpha/${ code }`;
    return this.http.get<Country[]>( url )
      .pipe(
        map( (countries) => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }
  SetCountryurl(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( () => of([])));
  }
  searchCapital(term: string): Observable<Country[]>{
    const url = `${this.Url}/capital/${term}`;
    return this.SetCountryurl(url).pipe(
      tap( Countries => this.cacheStore.byCapital = {term, Countries}),
      tap(()=> this.saveToLocalStorage())
    );
  }
  SearchCountry(term: string): Observable<Country[]>{
    const url = `${this.Url}/name/${term}`
    return this.SetCountryurl(url).pipe(
      tap( Countries => this.cacheStore.byCountries = {term, Countries}),
      tap(()=> this.saveToLocalStorage())
    );
  }
  SearchRegion(region: Region){
    const url = `${this.Url}/region/${region}`
    return this.SetCountryurl(url).pipe(
      tap( Countries => this.cacheStore.byRegion = {region, Countries}),
      tap(()=> this.saveToLocalStorage())
    );;
  }
}
