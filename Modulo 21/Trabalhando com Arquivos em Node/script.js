let fs = require('fs');

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, "utf-8", (error, data) => {
    if (error) throw error

    fs.writeFile(fileName + "_uppercase", data.toUpperCase(), (error) => {
        if (error) throw error

        console.log("gerado com sucesso")
    })
})