import {assert} from 'chai';
import openTab from './open-tab';

describe('openTab', () => {

	describe('#default()', () => {

		it('should open a new tab', () => {
			let link = 'https://google.com',
				newWindowReference = openTab(link);

			assert.isNotNull(newWindowReference);
		});
	});
});
