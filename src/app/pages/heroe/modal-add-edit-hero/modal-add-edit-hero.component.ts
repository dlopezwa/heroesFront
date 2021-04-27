import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroService } from 'src/app/services/hero/hero.service';
import { HeroETO } from 'src/app/services/hero/hero.service.interface';
import { NotificationSnackBarService } from 'src/app/services/notification-snack-bar/notification-snack-bar.service';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-modal-add-edit-hero',
  templateUrl: './modal-add-edit-hero.component.html',
  styleUrls: ['./modal-add-edit-hero.component.scss']
})
export class ModalAddEditHeroComponent implements OnInit {

  // Variables
  title: string;
  buttonText = 'Create the hero';

  // Formulario
  heroForm = this.fb.group({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    heroName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    heroPower: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private notificationSnackBarService: NotificationSnackBarService,
    public matDialogRef: MatDialogRef<ModalAddEditHeroComponent>,
    @Inject(MAT_DIALOG_DATA) private dataFromNewHero,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.dataFromNewHero.modalType === 'new'
    ? this.title = 'New Hero'
    : this.title = 'Edit Hero';

    if (this.dataFromNewHero.modalType !== 'new') {
      this.editHero();
    }
  }


   getHero(): HeroETO {
     let heroETO: HeroETO = {  
     firstName : this.heroForm.get('firstName').value,
     lastName : this.heroForm.get('lastName').value,
     heroName : this.heroForm.get('heroName').value,
     heroPower : this.heroForm.get('heroPower').value
     }
     return heroETO;
   }

  editHero(): void {
    this.buttonText = 'Edit this hero';
    this.heroForm.setValue({
      firstName: this.dataFromNewHero.hero.firstName,
      lastName: this.dataFromNewHero.hero.lastName,
      heroName: this.dataFromNewHero.hero.heroName,
      heroPower: this.dataFromNewHero.hero.heroPower,
    });
  }


  onSubmit(): void {

    //  Si no supera las validaciones del formulario no hace nada.
    if(!this.heroForm.valid) {
      return;
    }

    if (this.dataFromNewHero.modalType === 'new') {
    // Construimos el objeto a enviar al servicio.
    this.heroService.saveHero(this.getHero()).subscribe(res => {
      console.log('Guardado OK: ', res);
      // Emitimos que se ha modificado la tabla hero
      this.subjectService.modalAddEditHeroSubject.next(true);
      this.notificationSnackBarService.openSuccessSnackBar('El Héroe ha sido guardado Correctamente');
      this.matDialogRef.close();
    }, 
    error => {
      console.error('Guardado KO: ', error);
      this.notificationSnackBarService.openFailureSnackBar('Ha ocurrido un error guardando al Héroe');
      this.matDialogRef.close();
    });
  } else {
    this.heroService.updateHero(
      this.getHero(),
      this.dataFromNewHero.hero._links.self.href
    ).subscribe( res => {
      console.log('Editado OK: ', res);
      // Emitimos que se ha modificado la tabla hero
      this.subjectService.modalAddEditHeroSubject.next(true);
      this.notificationSnackBarService.openSuccessSnackBar('El Héroe ha sido editado Correctamente');
      this.matDialogRef.close();
    }, error => {
      console.error('Editado KO: ', error);
      this.notificationSnackBarService.openFailureSnackBar('Ha ocurrido un error editando al Héroe');
      this.matDialogRef.close();
    });
  }

   console.log('hace el submit');
  }

}
