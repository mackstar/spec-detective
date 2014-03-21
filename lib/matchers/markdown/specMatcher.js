var util = require("util"),
    GenericMatcher = require("../genericMatcher.js");

function MarkdownSpecMatcher() {
    this.tokens = ['+'];

    this.strip = function(line) {
        return this.match(line)[1].replace('it ', '');
    };
}

util.inherits(MarkdownSpecMatcher, GenericMatcher);

module.exports = MarkdownSpecMatcher;