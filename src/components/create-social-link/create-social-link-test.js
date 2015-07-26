import {assert} from 'chai';
import createSocialLink from './create-social-link';

describe('createSocialLink', () => {

	it('should return the correct twitter link pattern', () => {
		let socialData = [
			'twitter',
			'www.youtube.com',
			'Broadcast Yourself',
			'videos'
		];

		assert.equal(createSocialLink(...socialData), `https://twitter.com/share?url=www.youtube.com&text=Broadcast Yourself&hashtags=videos`);
	});

	it('should return the correct linkedIn link pattern', () => {
		let socialData = [
			'linkedIn',
			'www.youtube.com',
			'Broadcast Yourself',
			'videos'
		];

		assert.equal(createSocialLink(...socialData), `http://www.linkedin.com/shareArticle?url=www.youtube.com&title=Broadcast Yourself%20%23videos`);
	});

	// it('should work with deepEqual', () => {
	// 	let exampleString = 'Hello world';
	// 	assert.deepEqual(exampleString.split(' '), ['Hello', 'world']);
	// });
});
