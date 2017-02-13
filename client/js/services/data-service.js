export function getBootstrappedData() {
	let data = document.getElementById('bootstrapped-data');

	if (data.length) {
		// cast nodeList to Array
		return [].prototype.map.apply(data, (d) => d);
	} else {
		return [];
	}
}