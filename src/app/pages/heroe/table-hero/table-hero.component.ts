import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../services/mission/mission.service.interface';

// export interface Hero {
//   firstName: string;
//   lastName:  string;
//   heroName:  string;
//   heroPower: string;
//   id:        number;
// }

const ELEMENT_DATA: Hero[] = [
  {id: 1, firstName: 'nombre1', lastName: 'apellidos1', heroName: 'nombre1', heroPower: 'poder1'},
  {id: 2, firstName: 'nombre2', lastName: 'apellidos2', heroName: 'nombre2', heroPower: 'poder2'},
  {id: 3, firstName: 'nombre3', lastName: 'apellidos3', heroName: 'nombre3', heroPower: 'poder3'},
  {id: 4, firstName: 'nombre4', lastName: 'apellidos4', heroName: 'nombre4', heroPower: 'poder4'},
  {id: 5, firstName: 'nombre5', lastName: 'apellidos5', heroName: 'nombre5', heroPower: 'poder4'}
];

@Component({
  selector: 'app-table-hero',
  templateUrl: './table-hero.component.html',
  styleUrls: ['./table-hero.component.scss']
})
export class TableHeroComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'heroName','heroPower'];
  dataSource = ELEMENT_DATA;

}
