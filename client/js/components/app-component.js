import React from 'react';

export default function AppComponent({ whatevers, onClick }) {
	return (
		<div>
			{ whatevers.map((whatever, i) => 
				<div key={ i } onClick={ onClick.bind(this, whatever.description) }>{ JSON.stringify(whatever) }</div>
			)}
		</div>
	)
}