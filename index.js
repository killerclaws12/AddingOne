const chalk = require('chalk')

module.exports = {
    addOne: async (number) => {
        console.log(chalk.blue(`${number += 1}`))
        return number + 1
    }
}