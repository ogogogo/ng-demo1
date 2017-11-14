import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataTable } from './entity/data-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _dataTable: DataTable;

  public get dataTable(): DataTable {
    return this._dataTable;
  }

  constructor() {
    const dicts = [];
    const datas = [];

    for (let i = 0; i < 100; i++) {
      dicts.push({ fieldName: `field_${i}`, caption: `字段${i}`});
    }

    for (let i = 0; i < 100; i++) {
      const data = {};
      for (let ii = 0; ii < dicts.length; ii++) {
        const field = dicts[ii];
        data[field.fieldName] = i + ii;
      }
      datas.push(data);
    }

    console.log('datas', datas);

    this._dataTable = new DataTable(dicts, datas);
  }
}
