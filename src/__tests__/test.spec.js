const PhoneGenerator = require('../phoneGenerator');
const writeToFile = require('../writeToFile');
const sortSmallest = require('../sortSmallest');
const sortLargest = require('../sortLargest');
const generateNumbers = require('../generateNumbers')

const data = generateNumbers();

jest.mock('../writeToFile', () => jest.fn());
// jest.mock('../sortSmallest', () => jest.fn());


describe("Phone Generator", () => {
    it("tests for phone generator", () => {
        PhoneGenerator();
        expect(writeToFile.mock.calls.length).toBe(2);
    });

    it("tests if sortSmallest is called when writeToFile is called", () => {
        writeToFile();
        // expect(sortSmallest.mock.calls.length).toBe(1);
    });
});