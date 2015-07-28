export default function openTab(link) {
	let newWindowReference = window.open(link, '_blank').focus();
	return newWindowReference;
}
