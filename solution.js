const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)

// how can i do this
// need to write some specific code

let variable = 0
// need to figure out the function
function readCode() {
    return variable
}
console.log(readCode())

// this is more pseudo code