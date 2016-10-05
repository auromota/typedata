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