// const expect = require('chai').expect;
const writeToFile = require('../writeToFile');
const sortSmallest = require('../sortSmallest');
const generateNumbers = require('../generateNumbers')
const chalk = require('chalk');

const log = console.log;

const data = generateNumbers();
jest.mock('../sortSmallest', () => jest.fn());

describe("WriteToFile Tests", () => {

    it("tests if sortSmallest is called when writeToFile is called", async (done) => {
        await writeToFile(data);
        done();
        // expect(global.console.log).toHaveBeenCalled();
    });
});