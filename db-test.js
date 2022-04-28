const sqlite3 = require('sqlite3');

const sqlite = require('sqlite');
const {open} = require('sqlite')

async function openDB (){
    return open({
        filename : './db.sqlite',
        driver: sqlite3.Database
    })
}




setup();

async function setup() {
    const db = await openDB();

    const vehicles = await db.all('SELECT * FROM “college” ');
    // console.log('ALL VEHICLES', JSON.stringify(vehicles));
    console.log(vehicles);
}

setup();