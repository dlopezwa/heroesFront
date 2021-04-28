import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { HeroesETO, HeroETO } from './hero.service.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  APIEndPoint: string;

  
  constructor(private httpClient: HttpClient) {
    this.APIEndPoint = environment.APIEndPoint;
  }

  findAllHero(): Observable<HeroesETO> {
    return this.httpClient.get<HeroesETO>(`${environment.APIEndPoint}heroes/`);
  }

  saveHero(heroETO: HeroETO) {
    return this.httpClient.post<HeroETO>(`${environment.APIEndPoint}heroes/`, heroETO);
  }

  updateHero(hero: HeroETO, link: string): Observable<HeroETO> {
    return this.httpClient.put<HeroETO>(link, hero);
  }

}
