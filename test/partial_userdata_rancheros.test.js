var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("partials", function() {
  describe("userdata", function() {
    describe("rancheros", function() {
      it("builds rancheros cloud-config", function() {
        cTests.testParticle(
          "partial",
          "userdata/rancheros",
          require("./fixtures/partial_userdata_rancheros_output_1"),
          {hArgs: {}}
        );
      });
    });

    //it("will add mysql configuration", function() {
      //cTests.testParticle(
        //"partial",
        //"rancher_server_command",
        //require("./fixtures/partial_userdata_rancheros_output_2"),
        //{hArgs: {
          //cattleDbCattleMysqlName: "dbName",
          //cattleDbCattleUsername: "username",
          //cattleDbCattlePassword: "password",
          //cattleDbCattleMysqlHost: "localhost",
          //cattleDbCattleMysqlPort: 3306
        //}}
      //);
    //});
  });
});
