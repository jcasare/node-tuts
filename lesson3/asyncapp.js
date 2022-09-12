//asynchronous approach
const {readFile, writeFile} = require('fs')

readFile('./content-folder/first.txt','utf-8',(err,result)=>{
if(err){
    console.log(err);
    return
}
const first = result;
readFile('./content-folder/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const second = result;
    writeFile(
        './content-folder/fourth.txt', `Result: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        }
    )
}) 
})