import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';
import { MissionETO } from 'src/app/services/mission/mission.service.interface';

@Component({
  selector: 'app-table-mission',
  templateUrl: './table-mission.component.html',
  styleUrls: ['./table-mission.component.scss']
})
export class TableMissionComponent implements OnInit {

  dataSource: MissionETO[];
  displayedColumns: string[] = ['instructions'];

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.missionService.findAllMission().subscribe( res => {
      this.dataSource = res._embedded.missions;
      console.log(res);
    });
  }
}