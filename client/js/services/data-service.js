export function getBootstrappedData() {
	let $el = document.getElementById('bootstrapped-data');
	let data = JSON.parse($el.innerText);

	return data.length ? data : [];
}