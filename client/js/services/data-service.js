
export function getBootstrappedTweets() {
	let $el = document.getElementById('bootstrapped-data');
	let data = JSON.parse($el.innerText);

	return data.length ? data : [];
}

export function getTweets(term) {
	return $.getJSON(`/${term}?format=json`)
		.catch(error => {
			console.log(error);
		});
}