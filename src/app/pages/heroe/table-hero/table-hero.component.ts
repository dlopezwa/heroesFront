import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HeroETO } from 'src/app/services/hero/hero.service.interface';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { HeroService } from '../../../services/hero/hero.service';
import { ModalAddEditHeroComponent } from '../modal-add-edit-hero/modal-add-edit-hero.component';
@Component({
  selector: 'app-table-hero',
  templateUrl: './table-hero.component.html',
  styleUrls: ['./table-hero.component.scss']
})
export class TableHeroComponent implements OnInit, OnDestroy {

  // Subscriptions
  modalAddEditHeroObservableRef: Subscription = null;
  findAllHeroRef: Subscription = null;

  // Definimos las columnas de la tabla
  displayedColumns: string[] = ['firstName', 'lastName', 'heroName', 'heroPower', 'button'];

  // Definimos los datos dentro de la tabla
  dataSource: HeroETO[];


  constructor(
    private heroService: HeroService,
    private matDialog: MatDialog,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.modalAddEditHeroObservableRef = this.subjectService
    .modalAddEditHeroObservable.subscribe(res => {
      this.callService();
    });
  }

  ngOnDestroy(): void{
    this.modalAddEditHeroObservableRef.unsubscribe();
    this.findAllHeroRef.unsubscribe();
  }

  callService(): void{
    this.findAllHeroRef = this.heroService.findAllHero().subscribe(res => {
      this.dataSource = res._embedded.heroes;
    });
  }

  editHero(element): void{
    this.matDialog.open(ModalAddEditHeroComponent, {
      height: '400px',
      width: '550px',
      autoFocus: false,
      data: {
        hero: element,
        modalType: 'edit'
      }
    });
  }
}
