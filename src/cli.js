#!/usr/bin/env node

// @flow

import npa from 'npm-package-arg';
import peerCompatible from 'peer-compatible';

import yargs from 'yargs';

yargs
  // version
  .alias('v', 'version')
  .version()
  // help
  .alias('h', 'help')
  .help()
  .usage('$0 <pkg> [<peer>...]')
  .example('$0 some-lib some-framework@1.0.0 some-other-peer@1.2.3')
  .example('$0 @angular/material @angular/core@2.0.0');

const args = yargs.argv._;
if (args.length < 1) {
  yargs.showHelp();
  process.exit(2);
}

const pkgName = args[0];
const peers = args
  .slice(1)
  .map(peerSpec => npa(peerSpec))
  .reduce((accPeers, peerResult) => {
    if (peerResult.type !== 'version') {
      throw new Error(`Expected a plain version, got ${peerResult}`);
    }
    return {
      ...accPeers,
      [peerResult.name]: peerResult.rawSpec,
    };
  }, {});

peerCompatible(pkgName, peers).then(versions => {
  versions.forEach(version => console.log(version));
  process.exit(Number(!versions.length));
});
