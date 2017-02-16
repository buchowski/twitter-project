var assert = require('assert');
var config = require('../../config.json');

describe('twitter page', function() {
    it(`should by default have a tweet by ${config.DEFAULT_USER}`, function () {
        browser.url('http://localhost:3000');

        var user = config.DEFAULT_USER;
        var text = $('.tweet > div').getText();
        var regex = new RegExp(user);

        assert(regex.test(text));

    });
});