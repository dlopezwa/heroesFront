import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  APIEndPoint: string;

  constructor(private httpClient: HttpClient) {
    this.APIEndPoint = environment.APIEndPoint;
   }

  findAllVillainsPages(page?: number, size?: number, orderName?: string): Observable<any> {
    let pagination = `page=${page}&size=${size}&sort=${orderName}`;
    return this.httpClient.get<any>(`${environment.APIEndPoint}villains?${pagination}`)
  }
}
