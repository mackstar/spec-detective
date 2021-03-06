var featureTransformer = require('../lib/featureTransformer'),
    fs = require('fs'),
    chai = require('chai'),
    assert = require('chai').assert;
chai.use(require('chai-fuzzy'));

describe("Transformation", function() {

    it("transforms a single IT", function(done) {
        var inputFile = "test/fixtures/spec/exampleSpec.feature";
        var expectedOutput = {
            "should do something" : "test/fixtures/spec/exampleSpec.feature:1"
        };
        verifyOutput(inputFile, expectedOutput, done);
        
    });

    it("can parse a real feature", function(done) {
        var inputFile = "test/fixtures/spec/realSpec.feature";
        var expectedOutput = {
            'should have a tab title of "More Live".' : 'test/fixtures/spec/realSpec.feature:8',
            'should be the third tab after the tab labelled "Data"' : 'test/fixtures/spec/realSpec.feature:9',
            'should only be displayed if the "Live Page Cross Promo" module is present.' : "test/fixtures/spec/realSpec.feature:10",
            'should only display the tab on resolutions less than 899px (tablet & mobile).' : "test/fixtures/spec/realSpec.feature:11",
            'should NOT display if the "related_sessions" flagpole is turned off.' : "test/fixtures/spec/realSpec.feature:12",
            'should NOT display the tab on fallback devices/browsers.' : "test/fixtures/spec/realSpec.feature:13"
        };

        verifyOutput(inputFile, expectedOutput, done);
    });

    describe("Parsing Markdown", function() {

        it("can parse a markdown file", function(done) {
            var inputFile = "test/fixtures/markdown/describe.md";
            var expectedOutput = {
                "a description" : {
                    "should do something" : "test/fixtures/markdown/describe.md:2"
                }
            };
            verifyOutput(inputFile, expectedOutput, done);
        });
    });

    function verifyOutput(inputFile, expectedOutput, done) {

        featureTransformer(inputFile, [], function(data) {
            assert.like(JSON.parse(data), expectedOutput);
            done();
        });
    }
});