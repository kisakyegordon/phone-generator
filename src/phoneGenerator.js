const generateNumbers = require('./generateNumbers');
const writeToFile = require('./writeToFile');

function PhoneGenerator() {
  const data = generateNumbers();

  writeToFile("phoneNumbers.json", data)
};

module.exports = PhoneGenerator;
PhoneGenerator()
