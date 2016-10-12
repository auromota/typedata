import List from './List';

export default class Iterator<T> {

    private _index: number;
    private list: List<T>;

    constructor(list: List<T>, index: number) {
        this.list = list;
        this._index = index;
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
            this._index++;
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
            this._index--;
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
        return this.list.get(this._index);
    }

    /**
     * Gets the previous element.
     * If there is not a previous element, it returns undefined.
     */
    get previous(): T {
        return this.list.get(this._index - 1);
    }

    /**
     * Gets the next element.
     * If there is not a next element, it returns undefined.
     */
    get next(): T {
        return this.list.get(this._index + 1);
    }

    /**
     * Gets the index in which iterator is.
     */
    get index(): number {
        return this._index;
    }

}