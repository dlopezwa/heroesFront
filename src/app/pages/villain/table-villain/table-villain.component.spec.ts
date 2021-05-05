import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVillainComponent } from './table-villain.component';

describe('TableVillainComponent', () => {
  let component: TableVillainComponent;
  let fixture: ComponentFixture<TableVillainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVillainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
