var SpecMatcher = require('../../../lib/matchers/markdown/specMatcher'),
    GenericMatcher = require('../../../lib/matchers/genericMatcher'),
    assert = require('assert');

describe("Spec Matcher", function() {

    it("should inherit from the generic matcher", function() {
        var specMatcher = new SpecMatcher();
        assert.equal((specMatcher instanceof GenericMatcher), true);
    });

    it("should match a line with a +", function() {
        var specMatcher = new SpecMatcher();
        var result = specMatcher.match("+ a spec");
        assert.equal(result[0], "+ a spec");
    });
});