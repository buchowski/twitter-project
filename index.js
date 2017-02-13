const { PORT } = require('./config.json');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('dist'));

// returned by getWhatever. delete dummyData after 3rd party call is setup
const DUMMY_DATA = [
    { id: 1, user: 'bobby budnick', title: 'orange juice', description: 'is full of vitamin C!' },
    { id: 2, user: 'bobby budnick', title: 'apple juice', description: 'does not taste like worms' },
    { id: 3, user: 'bobby budnick', title: 'carrot juice', description: 'is Bugs Bunny\'s fav!' },
    { id: 4, user: 'bobby budnick', title: 'brocolli juice', description: 'is made from steaming brocolli' },
    { id: 5, user: 'bobby budnick', title: 'mango juice', description: 'is a real treat' },
];

// mimics an asynchronous call to 3rd party service. replace with real call
function getWhatever(whatever) {
    return new Promise((resolve, reject) => {
        const timeoutID = setTimeout(() => {
            resolve(DUMMY_DATA);
            clearTimeout(timeoutID);
        }, Math.random() * 3000);
    });
}

app.get('/', (req, res) => {
    getWhatever()
        .then((response) => {
            res.render('index', { whatever: response });
        })
        .catch((error) => {
            console.log(error);
            res.send(`Sorry there was an error. Please try again. \n\n Error: ${error}`);
        });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
