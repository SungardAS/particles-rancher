var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("partials", function() {
  describe("userdata", function() {
    describe("amznlinux", function() {
      it("builds amznlinux cloud-config", function() {
        cTests.testParticle(
          "partial",
          "userdata/amznlinux",
          require("./fixtures/partial_userdata_amznlinux_output_1"),
          {hArgs: {}}
        );
      });
    });

  });
});
