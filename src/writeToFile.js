const fs = require('fs');
const chalk = require('chalk');
const sortSmallest = require('./sortSmallest');
const sortLargest = require('./sortLargest');

const log = console.log;

const writeToFile = (data) => {
  fs.writeFile ("phoneNumbers.json", JSON.stringify(data, null, 2), function(err) {
  log(chalk.blue('==========================================='))
  log(chalk.green('          Generation Complete          '))
  log(chalk.blue('==========================================='))
  log(chalk.whiteBright('\n' + 'Generated ') + chalk.red(data.length) + chalk.whiteBright(' Phone-Numbers'))
  sortSmallest(data);
  sortLargest(data);
  }
  )
}

module.exports = writeToFile;