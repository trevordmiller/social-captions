// import assert from 'assert';
import {assert} from 'chai';

describe('moduleName', () => {

	describe('#methodName()', () => {

		it('should work', () => {
			assert.equal(1 + 2, 2, 'the math is broken');
		});

		it('should work with deepEqual', () => {
			let exampleString = 'Hello world';
			assert.deepEqual(exampleString.split(' '), ['Hello', 'world']);
		});
	});
});
