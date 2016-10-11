import { ListableElement } from '../collections/LinkedList';

export class Listable<T> extends ListableElement<Listable<T>> {

    value: T;

    constructor(value: T) {
        super();
        this.value = value;
    }

}