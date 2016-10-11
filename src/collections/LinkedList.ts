import * as _ from 'lodash';

export class Iterable<T> {

    private index: number;
    private list: List<T>;

    constructor(list: List<T>, index: number) {
        this.list = list;
        this.index = index;
    }

    forward(): Iterable<T> {
        if (this.list.length > this.index + 1) {
            this.index++;
        }
        return this;
    }

    backward(): Iterable<T> {
        if (this.list.length > 0) {
            this.index--;
        }
        return this;
    }

    get hasPrevious(): boolean {
        return this.previous !== undefined;
    }

    get hasNext(): boolean {
        return this.next !== undefined;
    }

    get value(): T {
        return this.list.get(this.index);
    }

    get previous(): T {
        return this.list.get(this.index - 1);
    }

    get next(): T {
        return this.list.get(this.index + 1);
    }

}

export class List<T> {

    private _array: T[];

    /**
     * Creates a list containing the values passed in parameter.
     */
    constructor(...elements: T[]) {
        this._array = elements;
    }

    /**
     * @return Returns the element in the given index.
     */
    get(index: number): T {
        return this._array[index];
    }

    /**
     * Inserts an element in the first position of the list.
     * 
     * @param Element to be inserted.
     * @return Returns the list.
     */
    pushFront(element: T): List<T> {
        this._array.splice(0, 0, element);
        return this;
    }

    /**
     * Inserts an element in the last position of the list.
     * 
     * @param Element to be inserted.
     * @return Returns the list.
     */
    pushBack(element: T): List<T> {
        this._array.push(element);
        return this;
    }

    /**
     * Gets all the elements of the list.
     */
    get elements(): T[] {
        return this._array;
    }

    /**
     * Get or sets the length of the list.
     */
    get length(): number {
        return this._array.length;
    }

    set length(length: number) {
        this._array.length;
    }

    /**
     * Gets the first element of the list.
     */
    get first(): T {
        return _.head(this._array);
    }

    /**
     * Gets the last element of the list.
     */
    get last(): T {
        return _.last(this._array);
    }

    /**
     * Gets a new iterator for the list starting in first element.
     */
    get iterator(): Iterable<T> {
        return new Iterable<T>(this, 0);
    }


}