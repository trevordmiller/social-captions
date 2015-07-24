import {assert} from 'chai';
import exampleComponent from './example-component';

describe('exampleComponent', () => {

	describe('#init()', () => {
		it('should work', () => {
			assert.equal('working', exampleComponent.init());
		});
	});

});
