// 数据列
export class DataColumn {
    private _fieldName: string;
    private _caption: string;

    public get fieldName(): string {
        return this._fieldName;
    }

    public get caption(): string {
        return this._caption;
    }

    constructor(dict: any) {
        this._fieldName = dict['fieldName'];
        this._caption = dict['caption'];
    }
}
