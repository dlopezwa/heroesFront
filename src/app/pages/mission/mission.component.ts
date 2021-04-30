import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  // variable a enviar al hijo
  saveEventToChild: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  // recibimos la información del hijo (new-mission) y la enviamos al otro hijo (la tabla)
  receiveSaveEvent($event): void {
    this.saveEventToChild = $event;
    console.log(this.saveEventToChild)
  }

}
