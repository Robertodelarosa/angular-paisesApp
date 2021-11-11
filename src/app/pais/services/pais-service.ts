import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(pais: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${pais}`;
    return this.http.get<Country[]>(url);
    // const params = new HttpParams().set('name', termino);
    // return this.http.get(this.apiUrl, { params });
  }

  buscarCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorId(pais: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${pais}`;
    return this.http.get<Country[]>(url);
  }

}
