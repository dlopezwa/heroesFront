import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddMissionComponent } from '../modal-add-mission/modal-add-mission.component';

@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.component.html',
  styleUrls: ['./new-mission.component.scss']
})
export class NewMissionComponent implements OnInit {

  @Output() saveEvent = new EventEmitter<boolean>();

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.matDialog.open(ModalAddMissionComponent, {
      height: '400px',
      width: '550px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      this.saveEvent.emit(result);
    });
  }

}
