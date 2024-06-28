import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaises } from './pais.interface';


@Injectable()
export class PaisService {
  constructor(private http: HttpClient) {}
  
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getMoneda(moneda: string): Observable<IPaises[]> {
    return this.http.get<IPaises[]>(`https://restcountries.com/v3.1/currency/${moneda}`);
  }
}