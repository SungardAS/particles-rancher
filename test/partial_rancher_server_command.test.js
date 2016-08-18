var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("partials", function() {
  describe("rancher_server_command", function() {
    it("builds the rancher-server command", function() {
      cTests.testParticle(
        "partial",
        "server/start_command",
        require("./fixtures/partial_rancher_server_command_output_1"),
        {hArgs: {}}
      );
    });
  });

  it("will add mysql configuration", function() {
    cTests.testParticle(
      "partial",
      "server/start_command",
      require("./fixtures/partial_rancher_server_command_output_2"),
      {hArgs: {
        cattleDbCattleMysqlName: "dbName",
        cattleDbCattleUsername: "username",
        cattleDbCattlePassword: "password",
        cattleDbCattleMysqlHost: "localhost",
        cattleDbCattleMysqlPort: 3306
      }}
    );
  });
});
