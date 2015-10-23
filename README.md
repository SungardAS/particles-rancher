# particles-rancher

[![logo](https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png)](https://github.com/SungardAS/condensation)

[![NPM](https://nodei.co/npm/particles-rancher.png)](https://nodei.co/npm/particles-rancher/)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependency
Status](https://david-dm.org/SungardAS/particles-rancher.svg?branch=master)](https://david-dm.org/SungardAS/particles-rancher?branch=master)


## Summary

**ALPHA**

This particle is in ALPHA status. It may have bugs and may change structure regurally.

[Condensation](https://github.com/SungardAS/condensation) particles that create AWS CloudFormation templates.

Condensation allows templates and assets to be deployed together,
to any S3 bucket.  The template will always reference the assets and other templates that it
was deployed with.

## Build

    > ./node_modules/.bin/gulp condensation:build

## Packaged Project

Using condensation the built CloudFormation Templates for Rancher
have been deployed to the following S3 locations.

* us-east-1 [![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=rancher-ha&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-rancher/master/particles/cftemplates/ha/full_stack.template.json)
