import { ListableElement } from '../collections/ListableElement';

export class Listable<T> extends ListableElement<Listable<T>> {

    private value: T;

    constructor(value: T) {
        super();
        this.value = value;
    }

}