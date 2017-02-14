let { CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET } = require('../config.json');
const Twitter = require('twitter');

class TwitterService {
	constructor() {
		this.client = new Twitter({
		    consumer_key: CONSUMER_KEY,
		    consumer_secret: CONSUMER_SECRET,
		    access_token_key: ACCESS_TOKEN,
		    access_token_secret: ACCESS_TOKEN_SECRET
		});
	}
	getTimeline(user) {
		let params = {
		    screen_name: user,
		    count: 20
		};

		return this.client.get('statuses/user_timeline', params)
			.then(timeline => this.cleanTimeline(timeline));
	}
	cleanTimeline(timeline) {
		return timeline.map(({ text, created_at, id_str, retweeted, user: { screen_name } }) => {
			return { text, created_at, id_str, retweeted, user: { screen_name } };
		});
	}
}

module.exports = new TwitterService();






