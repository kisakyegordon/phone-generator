const PhoneGenerator = require('../phoneGenerator');
const writeToFile = require('../writeToFile');
const generateNumbers = require('../generateNumbers')

const data = generateNumbers();

jest.mock('../writeToFile', () => jest.fn());

describe("Phone Generator", () => {
    it("tests for phone generator", () => {
        PhoneGenerator();
        expect(writeToFile.mock.calls.length).toBe(2);
        writeToFile.mockReset()
    });
});