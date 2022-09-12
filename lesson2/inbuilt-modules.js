const os = require('os')
const fs  = require('fs')

//info about current user
const user =  os.userInfo()
console.log(user);

//method that returns system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

}
console.log(currentOS);