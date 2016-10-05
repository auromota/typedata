import { } from 'mocha';
import { expect } from 'chai';
import { List } from '../src/index';

describe('List', () => {

    it('should accept elements in constructor', () => {
        let values = [1, 2, 3];
        let list = new List<number>(...values);
        expect(list.elements).deep.eq(values);
    });

    it('should push an element in the front of the list', () => {
        let list = new List<number>(10, 20, 30);
        list.pushFront(40);
        expect(list.elements).deep.eq([40, 10, 20, 30]);
    });

    it('should push an element in the back of the list', () => {
        let list = new List<number>(10, 20, 30);
        list.pushBack(40);
        expect(list.elements).deep.eq([10, 20, 30, 40]);
    });

    it('should return the length of the list', () => {
        let list = new List<number>(1, 2);
        expect(list.length).eq(2);
        list.pushBack(3);
        expect(list.length).eq(3);
    });

});