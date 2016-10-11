import * as _ from 'lodash';

export abstract class ListableElement<T> {

    public previous: T;
    public next: T;

    constructor() { }

    get hasPrevious(): boolean {
        return this.previous !== undefined;
    }

    get hasNext(): boolean {
        return this.next !== undefined;
    }

}

export class List<T extends ListableElement<T>> {

    private _array: T[];

    /**
     * Creates a list containing the values passed in parameter.
     */
    constructor(...elements: T[]) {
        this._array = elements;
        let length = this.length;
        for (let i = 1; i < length; i++) {
            this.get(i - 1).next = this.get(i);
            this.get(i).previous = this.get(i - 1);
        }
    }

    get(index: number): T {
        return this._array[index];
    }

    /**
     * Insert an element in the first position of the list.
     */
    pushFront(element: T): List<T> {
        this._array.splice(0, 0, element);
        return this;
    }

    /**
     * Inserts an element in the last position of the list.
     */
    pushBack(element: T): List<T> {
        this._array.push(element);
        return this;
    }

    /**
     * @return Returns all the elements of the list.
     */
    get elements(): T[] {
        return this._array;
    }

    /**
     * @return Returns the length of the list.
     */
    get length(): number {
        return this._array.length;
    }

    get first(): T {
        return _.head(this._array);
    }

    get last(): T {
        return _.last(this._array);
    }

}