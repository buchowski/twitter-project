import React from 'react';

export default function SearchComponent({ term, onClick, onInput }) {
	return (
		<div>
			<input type="text" defaultValue={ term } onInput={ onInput.bind(this) } />
			<button onClick={ onClick.bind(this) }>SEARCH</button>
		</div>
	)
}