import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { MissionETO, MissionsETO } from './mission.service.interface';

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

  saveMission(mission: MissionETO): Observable<MissionETO>{
    return this.httpClient.post<MissionETO>(`${this.APIEndPoint}missions/`, mission);
  }

  updateMission(mission: MissionETO, link: string): Observable<MissionETO> {
    return this.httpClient.put<MissionETO>(link, mission);
  }
}