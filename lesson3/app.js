const {readFileSync, writeFileSync} = require('fs')


const firstFile = readFileSync('./content-folder/first.txt', 'utf-8')
const secondFile = readFileSync('./content-folder/second.txt', 'utf-8')

writeFileSync(
    './content-folder/third.txt',
    `adios amigos: ${firstFile},${secondFile}`,{flag:'a'}
    )