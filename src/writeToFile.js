const fs = require('fs');
const chalk = require('chalk');
const sortSmallest = require('./sortSmallest');
const sortLargest = require('./sortLargest');
const { promisify } = require('util');

const log = console.log;
const writeFile = promisify(fs.writeFile)

function writeToFile (path, data, cb) {
  if(!Array.isArray(data)){
    return ( new Error('Invalid Data'), false)
  }else{
    writeFile (path, JSON.stringify(data, null, 2)).then( ()=> {
    log(chalk.blue('==========================================='));
    log(chalk.green('          Generation Complete          '));
    log(chalk.blue('==========================================='));
    log(chalk.whiteBright('\n' + 'Generated ') + chalk.red(data.length) + chalk.whiteBright(' Phone-Numbers'));
    sortSmallest(data);
    sortLargest(data);
    return cb(null, true)
    }).catch((err) =>{
        return cb(err);
    }
  )
  }
}

module.exports = writeToFile;