import { } from 'mocha';
import { expect } from 'chai';
import { ArrayList } from '../src/index';

describe('ArrayList', () => {

    it('should accept elements in constructor', () => {
        let array = new ArrayList<string>('test one', 'test two');
        expect(array.values).deep.eq(['test one', 'test two']);
    });

    it('should add an element', () => {
        let array = new ArrayList<number>(1);
        array.insert(2);
        expect(array.values).deep.eq([1, 2]);
    });

    it('should return first and last elements', () => {
        let array = new ArrayList<number>();
        expect(array.first).eq(null);
        expect(array.last).eq(null);
        array.insert(10);
        array.insert(20);
        expect(array.first).eq(10);
        expect(array.last).eq(20);
        array.insert(30);
        expect(array.last).eq(30);
    });

});