var gitrev = require('git-rev-sync');

var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: 'condensation-particles.us-east-1'
      },
      prefix: 'particles-rancher/'+gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'us-west-2',
        bucket: 'condensation-particles.us-west-2'
      },
      prefix: 'particles-rancher/'+gitrev.branch(),
      clean: true,
      validate: true,
      create: true
    }
  ],
  dist: 'dist'
};

module.exports = config;
