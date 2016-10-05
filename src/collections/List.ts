export class List<T> {

    private _array: T[];

    /**
     * Creates a list containing the values passed in parameter.
     */
    constructor(...elements: T[]) {
        this._array = elements;
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
     * Returns all the elements of the list.
     */
    get elements(): T[] {
        return this._array;
    }

    /**
     * Returns the length of the list.
     */
    get length(): number {
        return this._array.length;
    }

}