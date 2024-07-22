
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private Url: string ='https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]>{
      return this.http.get<Country[]>(`${this.Url}/capital/${term}`).pipe(
        catchError( () => of([]))
      );
  }

  // searchByAlphaCode(AlphaCode: string): Observable<Country | null>
  // {
  //   return this.http.get<Country[]>(`${this.Url}/alpha/${AlphaCode}`)
  //   .pipe(
  //     map( countries=> ),
  //     catchError( () => of(null))
  //   );
  // }


  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.Url }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( (countries: string | Country[]) => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }

  SearchCountry(term: string): Observable<Country[]>{

    return this.http.get<Country[]>(`${this.Url}/name/${term}`).pipe(
      catchError( () => of([]))
    );
  }

  SearchRegion(region: string){
    return this.http.get<Country[]>(`${this.Url}/region/${region}`).pipe(
      catchError( () => of([]))
    );
  }
}
