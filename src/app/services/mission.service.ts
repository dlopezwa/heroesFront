import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { MissionsETO } from './mission/mission.service.interface';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  APIEndPoint: string;

  
  constructor(private httpClient: HttpClient) {
    this.APIEndPoint = environment.APIEndPoint;
  }

  findAllMission(): Observable<MissionsETO> {
    return this.httpClient.get<MissionsETO>(`${environment.APIEndPoint}missions/`);
  }
}