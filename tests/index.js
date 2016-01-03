/* eslint-disable max-nested-callbacks */

import _ from 'lodash';
import {
    expect
} from 'chai';
import {
    transform
} from 'babel-core';
import plugin from './../src';
import fs from 'fs';
import path from 'path';

let loadFixtures;

loadFixtures = (groupName) => {
    let fixtures,
        fixturesPath;

    fixtures = [];

    fixturesPath = path.resolve(__dirname, './' + groupName);

    fs.readdirSync(fixturesPath).map((caseName) => {
        let actualSource,
            expectedSource;

        actualSource = _.trim(fs.readFileSync(path.resolve(fixturesPath, caseName, 'actual'), 'utf8'));
        expectedSource = _.trim(fs.readFileSync(path.resolve(fixturesPath, caseName, 'expected'), 'utf8'));

        fixtures.push({
            actualSource,
            caseName,
            expectedSource
        });
    });

    return fixtures;
};

describe('plugin', () => {
    describe('success', () => {
        let successFixtures;

        successFixtures = loadFixtures('success-fixtures');

        _.forEach(successFixtures, (fixture) => {
            it('OK ' + fixture.caseName, () => {
                let resultSource;

                resultSource = transform(fixture.actualSource, {
                    babelrc: false,
                    plugins: [
                        plugin
                    ]
                }).code;

                resultSource = _.trim(resultSource);

                expect(fixture.expectedSource).to.equal(resultSource);
            });
        });
    });
});
