// @flow

import execa from 'execa';

test('finds @angular/material versions for angular 2.0.0', async () => {
  const ngMaterialVersions = await execa.stdout('babel-node', [
    'src/cli.js',
    '@angular/material',
    '@angular/core@2.0.0',
  ]);
  expect(ngMaterialVersions).toMatchSnapshot();
});

test('ignores peers not required at all', async () => {
  const ngMaterialVersions = await execa.stdout('babel-node', [
    'src/cli.js',
    '@angular/material',
    '@angular/core@2.0.0',
    'react@15.0.0',
  ]);
  expect(ngMaterialVersions).toMatchSnapshot();
});
