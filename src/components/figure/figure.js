import updateImageSrc from '../update-image-src/update-image-src';
import openTab from '../open-tab/open-tab';
import createSocialLink from '../create-social-link/create-social-link';

let figure = {
	init() {
		let picturePreviewSelector = '.figure__picture-preview',
			pictureInput = document.querySelector('.figure__picture'),
			hashtagInput = document.querySelector('.figure__hashtag'),
			captionInput = document.querySelector('.figure__caption'),
			shareButton = document.querySelector('.figure__share');

		pictureInput.addEventListener('input', () => {
			let picturePreviewSrc = pictureInput.value;
			updateImageSrc(picturePreviewSelector, picturePreviewSrc);
		});

		shareButton.addEventListener('click', () => {
			let socialData = [
				pictureInput.value,
				captionInput.value,
				hashtagInput.value
			];

			openTab(createSocialLink('twitter', ...socialData));
			openTab(createSocialLink('linkedIn', ...socialData));
		});
	}
};

export default figure;
