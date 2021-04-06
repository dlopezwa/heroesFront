import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HeroService } from 'src/app/services/hero/hero.service';
import { HeroETO } from 'src/app/services/hero/hero.service.interface';
import { NotificationSnackBarService } from 'src/app/services/notification-snack-bar/notification-snack-bar.service';

@Component({
  selector: 'app-modal-add-edit-hero',
  templateUrl: './modal-add-edit-hero.component.html',
  styleUrls: ['./modal-add-edit-hero.component.scss']
})
export class ModalAddEditHeroComponent implements OnInit {

  constructor(private fb: FormBuilder, private heroService: HeroService, private notificationSnackBarService: NotificationSnackBarService, private matDialogRef: MatDialogRef<ModalAddEditHeroComponent>) { }

  ngOnInit(): void {
  }
 
  profileForm = this.fb.group({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    heroName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    heroPower: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });


  getHero(): HeroETO {
    let heroETO: HeroETO = {  
    firstName : this.profileForm.get('firstName').value,
    lastName : this.profileForm.get('lastName').value,
    heroName : this.profileForm.get('heroName').value,
    heroPower : this.profileForm.get('heroPower').value
    }
    return heroETO;
  }


  onSubmit() {

    // Si no supera las validaciones del formulario no hace nada.
    if(!this.profileForm.valid) {
      return;
    }

    // Construimos el objeto a enviar al servicio.
    this.heroService.saveHero(this.getHero()).subscribe(res => {
      console.log('Guardado OK: ', res);
      this.notificationSnackBarService.openSuccessSnackBar('El Héroe ha sido guardado Correctamente');
      this.matDialogRef.close();
    }, 
    error => {
      console.error('Guardado KO: ', error);
      this.notificationSnackBarService.openFailureSnackBar('Ha ocurrido un error guardado al Héroe');
      this.matDialogRef.close();
    });

   console.log('hace el submit');
  }

}
