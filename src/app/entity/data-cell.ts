import { DataRow } from "./data-row";
import { DataColumn } from "./data-column";

// 单元格
export class DataCell {
    private _value: any;

    public get value(): any {
        return this._value;
    }
    public set value(value: any) {
        this._value = value;
    }

    constructor(value: any) {
        this._value = value;
    }
}
