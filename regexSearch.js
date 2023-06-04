const {RastlineArr} = require('./data.js')
console.log(RastlineArr[1])

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sTerm = '';

rl.question('search term: ', (searchTerm) => {
    sTerm = searchTerm;
    console.log(`this is you search term: ${sTerm}`);
    rl.close();
    regSearch();
});


function regSearch() {

    const regex = new RegExp(sTerm, 'i');
    console.log(regex) 

    for (let i = 0; i <= RastlineArr.length -1; i++) {
        
        if (regex.test(RastlineArr[i].title)) {
            console.log(RastlineArr[i].title);
        }
        if (regex.test(RastlineArr[i].sciName)) {
            console.log(RastlineArr[i].sciName);
        }
        if (regex.test(RastlineArr[i].description)) {
            console.log(RastlineArr[i].description);
        }
    }

}
