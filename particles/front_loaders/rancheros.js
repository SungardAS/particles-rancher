var async = require("async");
var amiLoader = require("particles-ec2/particles/front_loaders/ami")

module.exports = function amis(opts,cb) {
  amiLoader = amiLoader.bind(this);

  async.auto(
    {
      "rancheros045": async.apply(amiLoader,
        {
          Owners: ["605812595337"],
          Filters: [
            {Name: "state", Values: ["available"]},
            {Name: "name", Values: ["rancheros-v0.4.5-hvm*"]}
          ]
        }
      ),
      "rancheros050": async.apply(amiLoader,
        {
          Owners: ["605812595337"],
          Filters: [
            {Name: "state", Values: ["available"]},
            {Name: "name", Values: ["rancheros-v0.5.0-hvm*"]}
          ]
        }
      ),
      "rancheros060": async.apply(amiLoader,
        {
          Owners: ["605812595337"],
          Filters: [
            {Name: "state", Values: ["available"]},
            {Name: "name", Values: ["rancheros-v0.6.0-hvm*"]}
          ]
        }
      ),
      "rancheros070": async.apply(amiLoader,
        {
          Owners: ["605812595337"],
          Filters: [
            {Name: "state", Values: ["available"]},
            {Name: "name", Values: ["rancheros-v0.7.0-hvm*"]}
          ]
        }
      ),
      "rancheros07x": async.apply(amiLoader,
        {
          Owners: ["605812595337"],
          Filters: [
            {Name: "state", Values: ["available"]},
            {Name: "name", Values: ["rancheros-v0.7.?-hvm*"]}
          ]
        }
      )
    },
    cb
  );
}
