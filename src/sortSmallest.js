const chalk = require('chalk');
const fs = require('fs');

const log = console.log;
let smallest;

const sortSmallest = (phoneNumbers) => {
  const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  phoneNumbers.sort(function(a, b) { return collator.compare(a.number, b.number) });
  fs.writeFile ("phoneNumbers-asc.json", JSON.stringify(phoneNumbers, null, 2), () => {})
  smallest = JSON.stringify(phoneNumbers[0]);
  log(chalk.whiteBright('\n' + 'Smallest Phone-Number: ') + chalk.red(smallest))
}

module.exports = sortSmallest;