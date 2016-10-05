import * as _ from 'lodash';

export class ArrayList<T> {

    private _array: T[];

    constructor(...array: T[]) {
        this._array = array;
    }

    insert(element: T): void {
        this._array.push(element);
    }

    get values(): T[] {
        return this._array;
    }

    get first(): T | null {
        if (this._array.length > 0) {
            return this._array[0];
        }
        return null;
    }

    get last(): T | null {
        let length = this._array.length;
        if (length > 0) {
            return this._array[length - 1];
        }
        return null;
    }

}