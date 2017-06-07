# peer-compatible-cli

> Find versions of a package that work with given peer dependencies

[![build status](https://img.shields.io/travis/jeysal/peer-compatible-cli.svg?style=flat-square)](https://travis-ci.org/jeysal/peer-compatible-cli)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/jeysal/peer-compatible-cli.svg?style=flat-square&label=windows+build)](https://ci.appveyor.com/project/jeysal/peer-compatible-cli)

[![npm package](https://img.shields.io/npm/v/peer-compatible-cli.svg?style=flat-square)](https://www.npmjs.com/package/peer-compatible-cli)
[![license](https://img.shields.io/github/license/jeysal/peer-compatible-cli.svg?style=flat-square)](https://github.com/jeysal/peer-compatible-cli/blob/master/LICENSE)

## Example

Imagine you want to use component library `L`, which requires framework `F@^2.0.0` as a peer dependency.  
But you are for some reason still on `F@1.2.3` and cannot upgrade to `F@2.0.0`.  
But in the past, when `F@1.2.3` was the latest version, there was a version of `L` that supported it.  
So now you want to find out what versions of `L` still support `F@1.2.3`.  
With `peer-compatible-cli`, this can be done:
```
$ peer-compatible L F@1.2.3
1.0.0
1.0.1
1.1.0
```

## Installation

```
npm install -g peer-compatible-cli
```

## Usage

```
peer-compatible <pkg> [<peer>...]
peer-compatible some-lib some-framework@1.0.0 some-other-peer@1.2.3
peer-compatible @angular/material @angular/core@2.0.0
```

## Exit codes

* `0` if at least one compatible version has been found
* `1` if no compatible versions have been found
* `2` for invalid CLI usage
