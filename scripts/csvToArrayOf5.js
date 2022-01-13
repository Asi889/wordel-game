console.log('Getting your words....');
const fs = require('fs')
const {parse} = require('csv-parse')
function readFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path, function (err, fileData) {
            parse(fileData, {columns: false, trim: true}, async function(err, rows) {
                if(err){
                    reject(err)
                }
                resolve(rows)
            })
          })
    })
}
const LENGTH = 5;
const file = readFile('./scripts/words.csv').then(words =>{
    const res =[];
    words.forEach(([word]) => {
        if(word && word.length ===LENGTH && (/[\u0590-\u05FF]/).test(word) ){
            res.push(word);
        }
    });
    console.log(`Created new array with:${words.length}`);
    fs.writeFile("5letterWords.json", JSON.stringify(res,null, 4), function(err) {
        if (err) {
            console.log(err);
        }
    });
})