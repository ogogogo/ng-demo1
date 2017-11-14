import { DataRow } from "./data-row";
import { DataColumn } from "./data-column";

// 数据表
export class DataTable {
    private _rows: Array<DataRow>;
    private _columns: Array<DataColumn>;

    public get rows(): Array<DataRow> {
        return this._rows;
    }

    public get columns(): Array<DataColumn> {
        return this._columns;
    }

    constructor(dicts: Array<any>, datas: Array<any> = []) {
        this._columns = [];
        this._rows = [];
        this.loadColumns(dicts);
        this.loadData(datas);
    }

    private loadColumns(dicts: Array<any>) {
        dicts.forEach(el => {
            this._columns.push(new DataColumn(el));
        });
    }

    private loadData(datas: Array<any>) {
        datas.forEach(el => {
            this._rows.push(new DataRow(el, this));
        });
    }
}
