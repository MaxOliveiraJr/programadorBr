let fs = require("fs");

fs.writeFile("texto.txt", 'hello word', function (error) {
    if (error) { throw error };
});

fs.appendFile("texto.txt", ', how are you', function (error) {
    if (error) { throw error };
});

// fs.unlink("texto.txt", function (error) {
//     if (error) { throw error };
// });

// fs.rename("texto.txt", 'novo.txt', function (error) {
//     if (error) { throw error };
// });

fs.readFile("texto.txt", "utf-8",function (error, data) {

    if (error) { throw error }

    console.log(data);

})

// fs.unlink("texto.txt", function (error) {
//     if (error) { throw error };
// });


