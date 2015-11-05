# particles-rancher

[![logo](https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png)](https://github.com/SungardAS/condensation)

[![NPM](https://nodei.co/npm/particles-rancher.png)](https://nodei.co/npm/particles-rancher/)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependency
Status](https://david-dm.org/SungardAS/particles-rancher.svg?branch=master)](https://david-dm.org/SungardAS/particles-rancher?branch=master)


## Summary

**ALPHA**

This particle is in ALPHA status. It may have bugs and may change structure regularly.

[Condensation](https://github.com/SungardAS/condensation) particles that create AWS CloudFormation templates.

Condensation allows templates and assets to be deployed together,
to any S3 bucket.  The template will always reference the assets and other templates that it
was deployed with.


## Build

1. update the zookeeper submodule
2. build:

    > ./node_modules/.bin/gulp condensation:build

## Created Resources for HA deployment
* [Zookeeper-Exhibitor](https://github.com/mbabineau/cloudformation-zookeeper)
* Network infrastructure with [particles-vpc](https://github.com/sungardas/particles-vpc)
* Multi-AZ RDS with [particles-rds](https://github.com/sungardas/particles-rds)
* Multi-AZ Redis with [particles-elasticache](https://github.com/sungardas/particles-elasticache)
* Autoscaling Group for rancher-server
* Rancher websocket and go-machine instance
* Internal and Internet facing ELBs with TCP port forwarding
* Necessary security groups

## Packaged Project

Using condensation the built CloudFormation Templates for Rancher
have been deployed to the following S3 locations.

Defaults can be accepted for all but `ZookeeperKeyName`.  You must provide an existing SSH Key Pair Name for this parameter.

|region|Stack|
|------|------------|---------|
|us-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=rancher-ha&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-rancher/master/particles/cftemplates/ha/full_stack.template.json)|
|us-west-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-westt-2#/stacks/new?stackName=rancher-ha&templateURL=https://s3.amazonaws.com/condensation-particles.us-west-2/particles-rancher/master/particles/cftemplates/ha/full_stack.template.json)|
