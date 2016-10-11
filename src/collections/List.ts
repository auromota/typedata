import { tail, head, last, findIndex } from 'lodash';

export class Iterator<T> {

    private index: number;
    private list: List<T>;

    constructor(list: List<T>, index: number) {
        this.list = list;
        this.index = index;
    }

    /**
     * Moves the iterator to the next element.
     * If this is already the next element, then it does nothing.
     * To avoid an infinity loop, use it combined with hasNext property.
     * 
     * @return Returns the iterator itself.
     */
    forward(): Iterator<T> {
        if (this.list.length > this.index + 1) {
            this.index++;
        }
        return this;
    }

    /**
     * Moves the iterator to the previous element.
     * If this is already the first element, then it does nothing.
     * To avoid an infinity loop, use it combined with hasPrevious property.
     * 
     * @return Returns the iterator itself.
     */
    backward(): Iterator<T> {
        if (this.list.length > 0) {
            this.index--;
        }
        return this;
    }

    /**
     * Determines if the iterator has a previous element.
     * Use it combined to backward() method.
     */
    get hasPrevious(): boolean {
        return this.previous !== undefined;
    }

    /**
     * Determines if the iterator has a next element.
     * Use it combined to forward() method.
     */
    get hasNext(): boolean {
        return this.next !== undefined;
    }

    /**
     * Gets the actual element.
     */
    get value(): T {
        return this.list.get(this.index);
    }

    /**
     * Gets the previous element.
     * If there is not a previous element, it returns undefined.
     */
    get previous(): T {
        return this.list.get(this.index - 1);
    }

    /**
     * Gets the next element.
     * If there is not a next element, it returns undefined.
     */
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
     * Executes a function in every element of the list.
     */
    forEach(callback: (value: T, index: number, array: T[]) => void): void {
        this._array.forEach(callback);
    }

    /**
     * Gets the index of the first element in which the callback returns true.
     * If no element returns true, it returns -1.
     */
    findIndex(callback: (value: T) => boolean): number {
        return findIndex(this._array, callback);
    }

    /**
     * Executes a function in every element of the list and returns and a new list with the results.
     */
    map(callback: (value: T, index: number, array: T[]) => T): List<T> {
        return new List<T>(...this._array.map(callback));
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
     * Removes the first element of the list.
     * 
     * @return Returns the list.
     */
    popFront(): List<T> {
        this._array = tail(this._array);
        return this;
    }

    /**
     * Removes the last element of the list.
     * 
     * @return Returns the list.
     */
    popBack(): List<T> {
        if (this._array.length > 0) {
            this._array.length--;
        }
        return this;
    }

    /**
     * Inserts an element in a given index.
     * If index is lower than 0, it inserts in the first potision of the list.
     * If it equals or is higher than length, it inserts in the last position.
     * 
     * @return Returns the list.
     */
    insertAt(element: T, index: number): List<T> {
        if (index < 1) {
            this.pushFront(element);
        } else if (index >= this.length) {
            this.pushBack(element);
        } else {
            this._array.splice(this.fixIndex(index), 0, element);
        }
        return this;
    }

    /**
     * Insert a sorted element using a compare function to determine the right position.
     * 
     * @return Returns the list.
     */
    insertSorted(element: T, callback: (a: T, b: T) => number): List<T> {
        let index = this.findIndex(e => callback(e, element) > -1);
        if (index === -1) {
            return this.pushBack(element);
        } else {
            return this.insertAt(element, index);
        }
    }

    /**
     * Gets the iterator starting at a given index.
     * If index is lower than 0, it is on the first element.
     * If it equals or is higher than length, it is on the last element.
     */
    iteratorAt(index: number): Iterator<T> {
        return new Iterator<T>(this, this.fixIndex(index));
    }

    /**
     * Removes the element at a given index.
     * If index is lower than 0, it removes the first element.
     * If it equals or is higher than length, it removes the last element.
     */
    removeAt(index: number): List<T> {
        this._array.splice(this.fixIndex(index), 1);
        return this;
    }

    /**
     * Sort the list given a compare function.
     */
    sort(callback: (a: T, b: T) => number): void {
        this._array.sort(callback);
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
        return head(this._array);
    }

    /**
     * Gets the last element of the list.
     */
    get last(): T {
        return last(this._array);
    }

    /**
     * Gets a new iterator for the list starting in first element.
     */
    get iterator(): Iterator<T> {
        return this.iteratorAt(0);
    }

    /**
     * If index is less than 0, returns the first position.
     * If it equals or is higher then length, returns the last position.
     */
    private fixIndex(index: number): number {
        return index < 0 ?
            0 :
            index > this.length - 1 ?
                this.length - 1 :
                index;
    }


}