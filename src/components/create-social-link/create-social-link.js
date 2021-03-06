export default function createSocialLink(type, url, text, hashtag) {
	let link = '';

	switch (type) {
		case 'twitter':
			link = `https://twitter.com/share?url=${url}&text=${text}&hashtags=${hashtag}`;
			break;
		case 'linkedIn':
			link = `http://www.linkedin.com/shareArticle?url=${url}&title=${text}%20%23${hashtag}`;
			break;
		default:
			console.error('An invalid social app name was provided.');
	}

	return link;
}
