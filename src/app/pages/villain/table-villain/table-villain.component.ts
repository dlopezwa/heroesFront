import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VillainService } from 'src/app/services/villain/villain.service';
import { VillainETO, VillainsETO } from 'src/app/services/villain/villain.service.interface';

@Component({
  selector: 'app-table-villain',
  templateUrl: './table-villain.component.html',
  styleUrls: ['./table-villain.component.scss']
})
export class TableVillainComponent implements OnInit {

  // Definimos las columnas de la tabla
  displayedColumns: string[] = ['villainName', 'villainPower'];

  // Definimos los datos dentro de la tabla
  dataSource: MatTableDataSource<VillainETO> = new MatTableDataSource();

  // Observamos cambios del DOM/html dónde estén estás propiedades de angular material
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // MatPaginator Inputs
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private villainService: VillainService
  ) { }

  ngOnInit(): void {
    this.callService();
  }

  callService(): void {
    this.villainService.findAllVillainsPages(
    ).subscribe((res: VillainsETO) => {
      this.dataSourceConf(res._embedded.villains);
    });
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.toLocaleLowerCase().trim();
  }

  dataSourceConf(dataRes: VillainETO[]): void{
    this.dataSource = new MatTableDataSource(dataRes);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: VillainETO, filter: string) => {
      return data.villainName.toLocaleLowerCase().includes(filter);
    };
  }

}
