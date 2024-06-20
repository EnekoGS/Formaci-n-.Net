import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeals } from '../interfaces/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  
  constructor(private http: HttpClient) {}

  getRecetas(categoria: string): Observable<IMeals> {
    return this.http.get<IMeals>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
  }

}

