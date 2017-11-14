import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DataTable } from '../entity/data-table';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grid-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './grid-edit.component.html',
  styleUrls: ['./grid-edit.component.css']
})
export class GridEditComponent implements OnInit {

  private _dataTable: DataTable;

  @Input()
  public get dataTable(): DataTable {
    return this._dataTable;
  }
  public set dataTable(value: DataTable) {
    console.log(value);
    this._dataTable = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
