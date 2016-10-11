import { } from 'mocha';
import { expect } from 'chai';
import { List, Iterator } from '../index';

describe('List', () => {

    it('should accept elements in constructor', () => {
        let values = [1, 2, 3];
        let list = new List<number>(...values);
        expect(list.elements).deep.eq(values);
    });

    it('should push an element in the front of the list', () => {
        let values = [10, 20, 30];
        let list = new List<number>(...values);
        list.pushFront(40);
        expect(list.elements).deep.eq([40, ...values]);
    });

    it('should push an element in the back of the list', () => {
        let values = [10, 20, 30];
        let list = new List<number>(...values);
        list.pushBack(40);
        expect(list.elements).deep.eq([...values, 40]);
    });

    it('should return the length of the list', () => {
        let list = new List<number>((1), (2));
        expect(list.length).eq(2);
        list.pushBack((3));
        expect(list.length).eq(3);
    });

    it('should return the last element', () => {
        let list = new List<number>();
        expect(list.last).eq(undefined);
        let elem1 = (1);
        list.pushBack(elem1);
        expect(list.last).eq(elem1);
        let elem2 = (2);
        list.pushBack(elem2);
        expect(list.last).eq(elem2);
    });

    it('should return the first element', () => {
        let list = new List<number>();
        expect(list.last).eq(undefined);
        let elem1 = (1);
        list.pushBack(elem1);
        expect(list.first).eq(elem1);
        let elem2 = (2);
        list.pushFront(elem2);
        expect(list.first).eq(elem2);
    });

    it('should return the nth element', () => {
        let list = new List<number>();
        let elem1 = 1;
        let elem2 = 2;
        let elem3 = 3;
        expect(list.get(1)).eq(undefined);
        list.pushBack(elem1);
        list.pushBack(elem2);
        list.pushBack(elem3);
        expect(list.get(2)).eq(elem3);
        expect(list.get(0)).eq(elem1);
    });

    it('should have next and previous properties', () => {
        let values = [1, 2, 3];
        let list = new List<number>(...values);
        let it = list.iterator;
        expect(it.next).eq(list.get(1));
        it.forward();
        expect(it.next).eq(list.get(2));
        it.forward();
        expect(it.next).eq(undefined);
    });

    it('should return if has next or previous elements', () => {
        let values = [1, 2, 3];
        let list = new List<number>(...values);
        let it = list.iterator;
        expect(it.hasNext).eq(true);
        it.forward();
        expect(it.hasNext).eq(true);
        it.forward();
        expect(it.hasNext).eq(false);
    });

    it('should iterate over the elements', () => {
        let values = [1, 2, 3];
        let list = new List<number>(...values);
        let it = list.iterator;
        let value = 1;
        while (it.hasNext) {
            expect(it.value).eq(value);
            it.forward();
            value++;
        }
    });

    it('should insert elements at an index', () => {
        let list = new List<number>();
        list.insertAt(1, 0);
        list.insertAt(2, 0);
        list.insertAt(3, 2);
        list.insertAt(4, 1);
        expect(list.elements).deep.eq([2, 4, 1, 3]);
    });

    it('should return the iterator at the given position', () => {
        let list = new List<number>(1, 2, 3, 4, 5, 6);
        let it = list.iteratorAt(-1);
        expect(it.value).eq(1);
        it = list.iteratorAt(9);
        expect(it.value).eq(6);
        it = list.iteratorAt(3);
        expect(it.value).eq(4);
    });

    it('should remove element at a given position', () => {
        let list = new List<number>(1, 2, 3, 4, 5, 6);
        list.removeAt(-1);
        expect(list.elements).deep.eq([2, 3, 4, 5, 6]);
        list.removeAt(10);
        expect(list.elements).deep.eq([2, 3, 4, 5]);
        list.removeAt(2);
        expect(list.elements).deep.eq([2, 3, 5]);
    });

    it('should pop elements', () => {
        let list = new List<number>(1, 2, 3, 4, 5, 6);
        list.popBack();
        expect(list.elements).deep.eq([1, 2, 3, 4, 5]);
        list.popFront();
        expect(list.elements).deep.eq([2, 3, 4, 5]);
        list.popBack();
        expect(list.elements).deep.eq([2, 3, 4]);
        list.popFront();
        expect(list.elements).deep.eq([3, 4]);
        list.popFront();
        expect(list.elements).deep.eq([4]);
        list.popBack();
        expect(list.elements).deep.eq([]);
        list.popFront();
        expect(list.elements).deep.eq([]);
        list.popBack();
        expect(list.elements).deep.eq([]);
    });

    it('should sum the list using for each', () => {
        let list = new List<number>(1, 2, 3, 4);
        let total = 0;
        list.forEach(value => total += value);
        expect(total).eq(10);
    });

    it('should map a new list with doubled values', () => {
        let list = new List<number>(1, 2, 3, 4);
        let newList = list.map(value => value * 2);
        expect(newList.elements).deep.eq([2, 4, 6, 8]);
    });

    it('should find index for element', () => {
        let list = new List<string>('Jon', 'Mary', 'Kane');
        let indexMary = list.findIndex(name => name === 'Mary');
        expect(indexMary).eq(1);
        let indexKane = list.findIndex(name => name === 'Kane');
        expect(indexKane).eq(2);
        let invalidIndex = list.findIndex(name => name === 'Paul');
        expect(invalidIndex).eq(-1);
    });

    it('should sort the array', () => {
        let list = new List<string>('Jon', 'Mary', 'Kane');
        list.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        expect(list.elements).deep.eq(['Jon', 'Kane', 'Mary']);
    });

    it('should insert elements sorted', () => {
        let list = new List<number>();
        var compareFn = (a: number, b: number) => a < b ? -1 : a == b ? 0 : 1;
        list.insertSorted(1, compareFn);
        list.insertSorted(2, compareFn);
        list.insertSorted(-1, compareFn);
        list.insertSorted(0, compareFn);
        list.insertSorted(1, compareFn);
        list.insertSorted(3, compareFn);
        expect(list.elements).deep.eq([-1, 0, 1, 1, 2, 3]);
    });

    it('should remove element by iterator', () => {
        let list = new List<number>(1, 2, 3, 4);
        let it = list.iterator;
        expect(it.index).deep.eq(0);
        it.forward();
        expect(it.index).deep.eq(1);
        list.removeAt(it);
        expect(list.elements).deep.eq([1, 3, 4]);
    });

    it('should access elements as in a circular list', () => {
        let list = new List<number>(1, 2, 3, 4);
        expect(list.getCircular(-8)).eq(1);
        expect(list.getCircular(-7)).eq(2);
        expect(list.getCircular(-6)).eq(3);
        expect(list.getCircular(-5)).eq(4);
        expect(list.getCircular(-4)).eq(1);
        expect(list.getCircular(-3)).eq(2);
        expect(list.getCircular(-2)).eq(3);
        expect(list.getCircular(-1)).eq(4);
        expect(list.getCircular(0)).eq(1);
        expect(list.getCircular(1)).eq(2);
        expect(list.getCircular(2)).eq(3);
        expect(list.getCircular(3)).eq(4);
        expect(list.getCircular(4)).eq(1);
        expect(list.getCircular(5)).eq(2);
        expect(list.getCircular(6)).eq(3);
        expect(list.getCircular(7)).eq(4);
    });

    it('should set new values in the list', () => {
        let list = new List<number>(1, 2, 3, 4);
        list.set(10, 1);
        expect(list.elements).deep.eq([1, 10, 3, 4]);
        expect(list.set(1, 10)).eq(false);
    });

});