let { PORT, DEFAULT_USER } = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');
const twitterService = require('./server/twitter-service');

const app = express();
PORT = PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/:user?', (req, res) => {
	let user = req.params && req.params.user || DEFAULT_USER;
	let isJSON = req.query && req.query.format === 'json';

    twitterService.getTimeline(user)
        .then(response => {
        	if (isJSON) {
        		res.json(response);
        	} else {
	            res.render('index', { tweets: response });        		
        	}
        })
        .catch(error => {
            res.send(`Sorry there was an error. Please try again. Error: ${error}`);
        });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
