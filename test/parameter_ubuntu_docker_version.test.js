var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("ubuntu_docker_version", function() {
    it("creates the parameter", function() {
      cTests.testParticle(
        "parameter",
        "ubuntu/docker_version",
        require("./fixtures/parameter_ubuntu_docker_version_output_1"),
        {hArgs: {logicalId: "DockerVersion"}}
      );
    });
  });
});
