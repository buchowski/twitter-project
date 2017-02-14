import React from 'react';
import TweetComponent from './tweet-component';
import SearchComponent from './search-component';

export default function AppComponent({ tweets, search, onClick, onInput }) {
	return (
		<div>
			<SearchComponent search={ search } onClick={ onClick } onInput={ onInput } />
			<div id="tweets">
				{ tweets.map((tweet, i) => 
					<TweetComponent tweet={ tweet } key={ i} />
				)}
			</div>
		</div>
	)
}