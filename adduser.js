const fs = require('fs');


function adduser (username,age){

    const dataStruc = {

        username : null,
        age:null
    }
    file = fs.existsSync('datasource.json')
    if (!file) {
        fs.writeFileSync('datasource.json', '[]', 'utf-8');
    }
    const data = fs.readFileSync('datasource.json','utf-8');

    let newData = JSON.parse(data)
    console.log(newData)
    let prop = Object.create(dataStruc);
    prop.username = username
    prop.age = age
    newData.push(prop)
    fs.writeFileSync('datasource.json',JSON.stringify(newData) );
}





module.exports = adduser
