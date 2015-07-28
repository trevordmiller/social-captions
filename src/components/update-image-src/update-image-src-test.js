import {assert} from 'chai';
import updateImageSrc from './update-image-src';

describe('updateImageSrc', () => {

	describe('#default()', () => {

		it('should update the src attribute of an image element correctly', () => {
			let image = document.createElement('img'),
				imageSelector = '.example-image';
			image.classList.add('example-image');
			image.src = 'replace-me.jpg';
			document.body.appendChild(image);

			let exampleImage = document.querySelector(imageSelector),
				newSrc = 'https://placeimg.com/900/400/nature';
			updateImageSrc(imageSelector, newSrc);

			assert.equal(exampleImage.src, newSrc);
		});
	});
});
