const generateNumbers = require('./generateNumbers');
const writeToFile = require('./writeToFile');

function PhoneGenerator() {
  const data = generateNumbers();

  return (
    writeToFile(data)
  );
};

module.exports = PhoneGenerator;
PhoneGenerator()
