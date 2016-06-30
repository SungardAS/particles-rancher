# particles-rancher

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Summary

**BETA**

These particles are BETA and subject to change.

[Condensation](https://github.com/SungardAS/condensation) particles that create AWS CloudFormation templates.

Condensation allows templates and assets to be deployed together,
to any S3 bucket.  The template will always reference the assets and other templates that it
was deployed with.


## Build

1. update the zookeeper submodule
2. build:

    > npm run build

## Created Resources for HA deployment
* [Zookeeper-Exhibitor](https://github.com/mbabineau/cloudformation-zookeeper)
* Network infrastructure with [particles-vpc](https://github.com/sungardas/particles-vpc)
* Multi-AZ RDS with [particles-rds](https://github.com/sungardas/particles-rds)
* Multi-AZ Redis with [particles-elasticache](https://github.com/sungardas/particles-elasticache)
* Autoscaling Group for rancher-server
* Rancher websocket and go-machine instance
* ELB with TCP port forwarding
* Necessary security groups

## Packaged Project

Using condensation the built CloudFormation Templates for Rancher
have been deployed to the following S3 locations.

Defaults can be accepted for all but `ZookeeperKeyName`.  You must provide an existing SSH Key Pair Name for this parameter.

|region|Stack|
|------|------------|---------|
|us-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=rancher-ha&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-rancher/master/particles/cftemplates/ha/full_stack.template.json)|
|us-west-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=rancher-ha&templateURL=https://s3.amazonaws.com/condensation-particles.us-west-2/particles-rancher/master/particles/cftemplates/ha/full_stack.template.json)|


## Sungard Availability Services | Labs
[![Sungard Availability Services | Labs][labs-image]][labs-github-url]

This project is maintained by the Labs team at [Sungard Availability
Services](http://sungardas.com)

GitHub: [https://sungardas.github.io](https://sungardas.github.io)

Blog:
[http://blog.sungardas.com/CTOLabs/](http://blog.sungardas.com/CTOLabs/)

[labs-github-url]: https://sungardas.github.io
[labs-image]: https://raw.githubusercontent.com/SungardAS/repo-assets/master/images/logos/sungardas-labs-logo-small.png
[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-rancher.svg
[npm-url]: https://npmjs.org/package/particles-rancher
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[travis-image]: https://travis-ci.org/SungardAS/particles-rancher.svg?branch=master
[travis-url]: https://travis-ci.org/SungardAS/particles-rancher
[daviddm-image]: https://david-dm.org/SungardAS/particles-rancher.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SungardAS/particles-rancher
