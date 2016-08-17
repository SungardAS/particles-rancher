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

    > npm run build

## Ready To Launch

Ready to Launch community available templates created from condensation particles

### Single Instance

|region|rancheros (overlayfs)|ubuntu (overlayfs)|amznlinux (loopback dm)|
|------|---------|------|---------|
|us-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-rancher/master/particles/cftemplates/host/amznlinux/instance.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-rancher/master/particles/cftemplates/host/ubuntu/instance.template.json)|
|us-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3-us-west-1.amazonaws.com/condensation-particles.us-west-1/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|
|us-west-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3.amazonaws.com/condensation-particles.us-west-2/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3.amazonaws.com/condensation-particles.us-west-2/particles-rancher/master/particles/cftemplates/host/amznlinux/instance.template.json)|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3.amazonaws.com/condensation-particles.us-west-2/particles-rancher/master/particles/cftemplates/host/ubuntu/instance.template.json)|
|eu-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3-eu-west-1.amazonaws.com/condensation-particles.eu-west-1/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|
|eu-central-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3-eu-central-1.amazonaws.com/condensation-particles.eu-central-1/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|
|ap-northeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3-ap-northeast-1.amazonaws.com/condensation-particles.ap-northeast-1/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|
|ap-northeast-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-2#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3-ap-northeast-2.amazonaws.com/condensation-particles.ap-northeast-2/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|
|ap-southeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3-ap-southeast-1.amazonaws.com/condensation-particles.ap-southeast-1/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|
|ap-southeast-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3-ap-southeast-2.amazonaws.com/condensation-particles.ap-southeast-2/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|
|sa-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=sa-east-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3-sa-east-1.amazonaws.com/condensation-particles.sa-east-1/particles-rancher/master/particles/cftemplates/host/rancheros/instance.template.json)|


### Autoscaling Group

|region|rancheros|
|------|------------|---------|
|us-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|us-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-us-west-1.amazonaws.com/condensation-particles.us-west-1/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|us-west-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-us-west-2.amazonaws.com/condensation-particles.us-west-2/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|eu-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-eu-west-1.amazonaws.com/condensation-particles.eu-west-1/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|eu-central-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-eu-central-1.amazonaws.com/condensation-particles.eu-central-1/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|ap-northeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-ap-northeast-1.amazonaws.com/condensation-particles.ap-northeast-1/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|ap-northeast-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-2#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-ap-northeast-2.amazonaws.com/condensation-particles.ap-northeast-2/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|ap-southeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-1#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-ap-southeast-1.amazonaws.com/condensation-particles.ap-southeast-1/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|ap-southeast-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-ap-southeast-2.amazonaws.com/condensation-particles.ap-southeast-2/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|
|sa-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=sa-east-1#/stacks/new?stackName=particles-rancher-group&templateURL=https://s3-sa-east-1.amazonaws.com/condensation-particles.sa-east-1/particles-rancher/master/particles/cftemplates/host/rancheros/scaling_group.template.json)|


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
