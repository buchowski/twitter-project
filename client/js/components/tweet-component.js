import React from 'react';

export default function TweetComponent({ tweet }) {
	return (
		<div>
			{ JSON.stringify(tweet) }
		</div>
	)
}