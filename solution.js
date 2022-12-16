const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('instructions.txt', 'utf-8')

const stringData = data.split(/\r?\n/)