# Change Log
All notable changes to this project will be documented here in
accordance with [Keep a CHANGELOG][keep-changelog-url].
This project adheres to [Semantic Versioning][semver-url].

## [0.1.10] - 2016-10-25

### Added
- rancheros 0.7.0
- ec2 instance role to default host labels

### Changed
- xenial AMIs

## [0.1.10] - 2016-10-18

### Added
- Optional Instance Profile if IAM role provided

## [0.1.9] - 2016-10-14

### Fixed
- rancheros and amznlinux autoscale notification count

## [0.1.8] - 2016-10-12

### Fixed
- rancheros and amznlinux autoscale notification resource

## [0.1.7] - 2016-10-12

### Added
- rancheros 0.6.1

## [0.1.6] - 2016-10-12

### Added
- docker-1.12.2 for ubuntu

### Changed
- autoscaling now delivers signals to cloudformation for desired
  capacity

## [0.1.5] - 2016-09-15

### Changed
- auto upgrage set to false for ubuntu - was causing install to hang

## [0.1.4] - 2016-08-29

### Added
- Parameter particle for rancheros versions
- Parameter particle for ubuntu docker versions

### Changed
- rancheros and ubuntu parameter sets to use the added parameter particles

[cpt-url]: https://github.com/SungardAS/condensation-particle-tests
[semver-url]: http://semver.org
[keep-changelog-url]: http://keepachangelog.com/
[condensation-url]: https://github.com/SungardAS/condensation
