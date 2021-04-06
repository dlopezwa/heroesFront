import { Component, OnInit } from '@angular/core';
import { HeroETO } from 'src/app/services/hero/hero.service.interface';
import { HeroService } from '../../../services/hero/hero.service';
@Component({
  selector: 'app-table-hero',
  templateUrl: './table-hero.component.html',
  styleUrls: ['./table-hero.component.scss']
})
export class TableHeroComponent implements OnInit {
 
  dataSource: HeroETO[];
  displayedColumns: string[] = ['firstName', 'lastName', 'heroName','heroPower'];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.findAllHero().subscribe( res => {
      this.dataSource = res._embedded.heroes;
      console.log(res);
    });

  }
}
