import { DataCell } from "./data-cell";
import { DataTable } from "./data-table";

// 数据行
export class DataRow {
    private _cells: Array<DataCell>;

    public get cells(): Array<DataCell> {
        return this._cells;
    }

    constructor(data: any, table: DataTable) {
        this._cells = [];
        for (let index = 0; index < table.columns.length; index++) {
            const column = table.columns[index];
            this._cells.push(new DataCell(data[column.fieldName]));

            Object.defineProperty(this, column.fieldName, {
                get: function () {
                    return this._cells[index]; // this.getField(column.columnName);
                },
                enumerable: true,
                configurable: true
            });
        }
    }
}
