import {assert} from 'chai';
import getInputValues from './get-input-values';

describe('getInputValues', () => {

	describe('#default()', () => {

		it('should return the value of each input element', () => {
			let inputElements = [
				document.createElement('input'),
				document.createElement('input'),
				document.createElement('input')
			];

			let inputsFragment = document.createDocumentFragment();
			inputElements.forEach((input, index) => {
				input.value = index + 1;
				inputsFragment.appendChild(input);
			});
			document.body.appendChild(inputsFragment);
			inputElements = [].slice.call(document.querySelectorAll('input'));

			assert.deepEqual(getInputValues(inputElements), ['1', '2', '3']);
		});
	});
});
