const writeToFile = require('../writeToFile');
const generateNumbers = require('../generateNumbers')

const data = generateNumbers();

describe("WriteToFile Tests", function() {

    it("tests if writeToFile runs as expected when called", function (done) {
        writeToFile("phoneNumbers.json", data, function (err, result) {
            expect(result).toBe(true);
            done()
        });
    });
});