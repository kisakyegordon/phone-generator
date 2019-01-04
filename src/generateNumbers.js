const faker = require('faker');

let data = {}
data.phoneNumbers = []
let randomNumber = faker.random.number({ 'min': 1, 'max': 9999})

const generateNumbers = () => {
  for (let i=0; i<randomNumber; i++){
  let obj = {
      id: i,
      number: faker.phone.phoneNumber('0###-######')
  }
  data.phoneNumbers.push(obj)
}
  return data.phoneNumbers;
}

module.exports = generateNumbers;