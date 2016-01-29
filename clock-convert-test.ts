/// <reference path="typings/tsd.d.ts" />

const convert = require('./clock-convert');
// const assert = require('assert');
const {describe, it} = require('mocha');

const PI = Math.PI;
const PI_2 = Math.PI / 2;
const PI_4 = Math.PI / 4;
const PI_6 = Math.PI / 6;

type ioTuple = number[];

function fnDescribe(fnName: string, fn: (i: number) => number, ioArr: ioTuple[]): void {
    ioArr.forEach((io: ioTuple) => {
        var [i, o] = io;
        describe(fnName, () => it(`${fnName}(${i}) === ${o}`, () => assert.equal(fn(i), o)));
    });
}

fnDescribe('rad2deg', convert.rad2deg, [
    [-9 * PI_4, -405],
    [-8 * PI_4, -360],
    [-7 * PI_4, -315],
    [-6 * PI_4, -270],
    [-5 * PI_4, -225],
    [-4 * PI_4, -180],
    [-3 * PI_4, -135],
    [-2 * PI_4, -90],
    [-1 * PI_4, -45],
    [0 * PI_4, 0],
    [1 * PI_4, 45],
    [2 * PI_4, 90],
    [3 * PI_4, 135],
    [4 * PI_4, 180],
    [5 * PI_4, 225],
    [6 * PI_4, 270],
    [7 * PI_4, 315],
    [8 * PI_4, 360],
    [9 * PI_4, 405]
]);

fnDescribe('deg2rad', convert.deg2rad, [
    [-405, -9 * PI_4],
    [-360, -8 * PI_4],
    [-315, -7 * PI_4],
    [-270, -6 * PI_4],
    [-225, -5 * PI_4],
    [-180, -4 * PI_4],
    [-135, -3 * PI_4],
    [-90, -2 * PI_4],
    [-45, -1 * PI_4],
    [0, 0 * PI_4],
    [45, 1 * PI_4],
    [90, 2 * PI_4],
    [135, 3 * PI_4],
    [180, 4 * PI_4],
    [225, 5 * PI_4],
    [270, 6 * PI_4],
    [315, 7 * PI_4],
    [360, 8 * PI_4],
    [405, 9 * PI_4]
]);

describe('angleFromCenter', () => {
    assert.deepEqual(convert.angleFromCenter(50, 50, 100), 0);

    assert.deepEqual(convert.angleFromCenter(100, 50, 100), 0);
    assert.deepEqual(convert.angleFromCenter(50, 0, 100), PI_2);
    assert.deepEqual(convert.angleFromCenter(0, 50, 100), PI);
    assert.deepEqual(convert.angleFromCenter(50, 100, 100), -PI_2);
});

fnDescribe('radNorm', convert.radNorm, [
    [16 * PI_4, 0 * PI_4],
    [15 * PI_4, -1 * PI_4],
    [14 * PI_4, -2 * PI_4],
    [13 * PI_4, -3 * PI_4],
    [12 * PI_4, 4 * PI_4],
    [11 * PI_4, 3 * PI_4],
    [10 * PI_4, 2 * PI_4],
    [9 * PI_4, 1 * PI_4],
    [8 * PI_4, 0 * PI_4],
    [7 * PI_4, -1 * PI_4],
    [6 * PI_4, -2 * PI_4],
    [5 * PI_4, -3 * PI_4],
    [4 * PI_4, 4 * PI_4],
    [3 * PI_4, 3 * PI_4],
    [2 * PI_4, 2 * PI_4],
    [1 * PI_4, 1 * PI_4],
    [0 * PI_4, 0 * PI_4],
    [-1 * PI_4, -1 * PI_4],
    [-2 * PI_4, -2 * PI_4],
    [-3 * PI_4, -3 * PI_4],
    [-4 * PI_4, -4 * PI_4],
    [-5 * PI_4, 3 * PI_4],
    [-6 * PI_4, 2 * PI_4],
    [-7 * PI_4, 1 * PI_4],
    [-8 * PI_4, 0 * PI_4],
    [-9 * PI_4, -1 * PI_4],
    [-10 * PI_4, -2 * PI_4],
    [-11 * PI_4, -3 * PI_4],
    [-12 * PI_4, -4 * PI_4],
    [-13 * PI_4, 3 * PI_4],
    [-14 * PI_4, 2 * PI_4],
    [-15 * PI_4, 1 * PI_4],
    [-16 * PI_4, 0 * PI_4]
]);

fnDescribe('minNorm', convert.minNorm, [
    [-120, 0],
    [-110, 10],
    [-100, 20],
    [-90, 30],
    [-80, 40],
    [-70, 50],
    [-60, 0],
    [-50, 10],
    [-40, 20],
    [-30, 30],
    [-20, 40],
    [-10, 50],
    [0, 0],
    [10, 10],
    [20, 20],
    [30, 30],
    [40, 40],
    [50, 50],
    [60, 60],
    [70, 10],
    [80, 20],
    [90, 30],
    [100, 40],
    [110, 50],
    [120, 60]
]);

fnDescribe('min2radNorm', convert.min2radNorm, [
    [-25, -4 * PI_6],
    [-20, -5 * PI_6],
    [-15, 6 * PI_6],
    [-10, 5 * PI_6],
    [-5, 4 * PI_6],
    [0, 3 * PI_6],
    [5, 2 * PI_6],
    [10, 1 * PI_6],
    [15, 0 * PI_6],
    [20, -1 * PI_6],
    [25, -2 * PI_6],
    [30, -3 * PI_6],
    [35, -4 * PI_6],
    [40, -5 * PI_6],
    [45, -6 * PI_6],
    [50, 5 * PI_6],
    [55, 4 * PI_6],
    [60, 3 * PI_6],
    [65, 2 * PI_6],
    [70, 1 * PI_6],
    [75, 0 * PI_6]
]);

fnDescribe('rad2minNorm', convert.rad2minNorm, [
    [9 * PI_6, 30],
    [8 * PI_6, 35],
    [7 * PI_6, 40],
    [6 * PI_6, 45],
    [5 * PI_6, 50],
    [4 * PI_6, 55],
    [3 * PI_6, 0],
    [2 * PI_6, 5],
    [1 * PI_6, 10],
    [0 * PI_6, 15],
    [-1 * PI_6, 20],
    [-2 * PI_6, 25],
    [-3 * PI_6, 30],
    [-4 * PI_6, 35],
    [-5 * PI_6, 40],
    [-6 * PI_6, 45],
    [-7 * PI_6, 50],
    [-8 * PI_6, 55],
    [-9 * PI_6, 60],
    [-10 * PI_6, 5],
    [-11 * PI_6, 10],
    [-12 * PI_6, 15]
]);

describe('putInRange', () => {
    assert.deepEqual(convert.putInRange(-10, 0, 10), 0, 'Smaller value');
    assert.deepEqual(convert.putInRange(100, 0, 10), 10, 'Larger value');
    assert.deepEqual(convert.putInRange(0, 0, 10), 0, 'On lower border');
    assert.deepEqual(convert.putInRange(10, 0, 10), 10, 'On higher border');
    assert.deepEqual(convert.putInRange(5, 0, 10), 5, 'In between 5');
    assert.deepEqual(convert.putInRange(9.5, 0, 10), 9.5, 'In between 9.5');
    assert.deepEqual(convert.putInRange(0.5, 0, 10), 0.5, 'In between 0.5');
});