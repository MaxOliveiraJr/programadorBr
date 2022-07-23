const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 0,
    name: 'Max Oliveira',
    phone: '9198485258',
}

function render(data,obj){
    for(let key in obj){
        data = data.replace(`{{{${key}}}}`, obj[key])
    }

    return data;
}

app.get("/", (req, res) => {
    fs.readFile('./templates/user.html', 'UTF8', (err, data) => {
        if (!err) {
            // data = data.replace('{{{name}}}', user.name);
            // data = data.replace('{{{phone}}}', user.phone);
            res.send(render(data,user));
        }
    })
})

app.listen(3000, () => {
    console.log('Server Running on 3000');
})