import React from 'react';

export default function TweetComponent({ tweet }) {
	return (
		<div className="tweet">
			<div>by { tweet.user.screen_name } at { tweet.created_at }</div>
			<p>{ tweet.text }</p>
		</div>
	)
}