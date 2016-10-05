import * as _ from 'lodash';

export class ArrayList<T> {

    private _array: T[];

    constructor(...array: T[]) {
        this._array = array;
    }

    get values(): T[] {
        return this._array;
    }

    insert(element: T): void {
        this._array.push(element);
    }

}