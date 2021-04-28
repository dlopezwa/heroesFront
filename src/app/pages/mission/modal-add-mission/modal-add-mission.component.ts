import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MissionService } from 'src/app/services/mission/mission.service';
import { MissionETO } from 'src/app/services/mission/mission.service.interface';
import { NotificationSnackBarService } from 'src/app/services/notification-snack-bar/notification-snack-bar.service';

@Component({
  selector: 'app-modal-add-mission',
  templateUrl: './modal-add-mission.component.html',
  styleUrls: ['./modal-add-mission.component.scss']
})
export class ModalAddMissionComponent implements OnInit {

  @Output() saveEvent = new EventEmitter<boolean>();

  // Formulario
  missionForm = this.fb.group({
    instructions: new FormControl('', [Validators.required, Validators.maxLength(150)])
  });

  constructor(
    private fb: FormBuilder,
    private missionService: MissionService,
    private notificationSnackBarService: NotificationSnackBarService,
    public matDialogRef: MatDialogRef<ModalAddMissionComponent>,
    @Inject(MAT_DIALOG_DATA) public dataFromNewMission
  ) { }

  ngOnInit(): void {
  }

  getMission(): MissionETO {
    const missionETO: MissionETO = {
      instructions: this.missionForm.get('instructions').value
    };
    return missionETO;
  }

  click(){
    console.log('hola')
  }

  onSubmit(): void {
    if (!this.missionForm.valid) { return; }
    this.missionService.saveMission(this.getMission()).subscribe(res => {
      console.log('Guardado OK: ', res);
      this.notificationSnackBarService.openSuccessSnackBar('La mission ha sido guardada correctamente');
      this.matDialogRef.close(true);
    }, error => {
      console.error('Guardado KO: ', error);
      this.notificationSnackBarService.openFailureSnackBar('Ha ocurrido un error guardando la mission');
      this.matDialogRef.close();
    });

  }

}
