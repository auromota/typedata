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

});