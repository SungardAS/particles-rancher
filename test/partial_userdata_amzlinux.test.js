var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("partials", function() {
  describe("userdata", function() {
    describe("amzlinux", function() {
      it("builds amzlinux cloud-config", function() {
        cTests.testParticle(
          "partial",
          "userdata/amzlinux",
          require("./fixtures/partial_userdata_amzlinux_output_1"),
          {hArgs: {}}
        );
      });
    });

  });
});
