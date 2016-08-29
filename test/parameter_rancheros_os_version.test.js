var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("rancheros_os_version", function() {
    it("creates the parameter", function() {
      cTests.testParticle(
        "parameter",
        "rancheros/os_version",
        require("./fixtures/parameter_rancheros_os_version_output_1"),
        {hArgs: {logicalId: "DockerVersion"}}
      );
    });
  });
});
