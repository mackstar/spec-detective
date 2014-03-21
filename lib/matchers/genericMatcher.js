
function GenericMatcher() {
    this.tokens = [];
}

GenericMatcher.prototype.match = function(line) {
    for(var i = 0; i < this.tokens.length; i++) {
        var regex = new RegExp('\\' + this.tokens[i] + ' ([^\n]*)');
        if(line.match(regex)) {
            return line.match(regex);
        }
    }
    return false;
};

module.exports = GenericMatcher;