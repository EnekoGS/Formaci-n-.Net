import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGiphy } from '../interfaces/giphy.interface';


@Injectable({
    providedIn: 'root'
})
export class deportesService {

    constructor(private http: HttpClient) {}

    getDeportes(deportes: string): Observable<IGiphy> {
        return this.http.get<IGiphy>(`https://api.giphy.com/v1/gifs/search?q=${deportes}&limit=10&api_key=ck11gaWbHVnGqcWILyTMjUH7aHdsDoVP`);
    }
}