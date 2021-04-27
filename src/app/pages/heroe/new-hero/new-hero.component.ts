import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddEditHeroComponent } from '../modal-add-edit-hero/modal-add-edit-hero.component';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss'],
})
export class NewHeroComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog.open(ModalAddEditHeroComponent, {
      height: '400px',
      width: '550px',
      autoFocus: false,
      data: {
        modalType: 'new'
      }
    });
  }
}
