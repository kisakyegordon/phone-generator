const chalk = require('chalk');
const fs = require('fs');

const log = console.log;
let largest;

function sortLargest (phoneNumbers) {
  const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  phoneNumbers.sort(function(a, b) { return collator.compare(b.number, a.number) });
  fs.writeFile ("phoneNumbers-desc.json", JSON.stringify(phoneNumbers, null, 2), () => {})
  largest = JSON.stringify(phoneNumbers[0]);
  log(chalk.whiteBright('\n' + 'Largest Phone-Number: ') + chalk.red(largest))
}

module.exports = sortLargest;