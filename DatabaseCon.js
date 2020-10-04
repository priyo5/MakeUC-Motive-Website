const MongoClient = require('mongodb').MongoClient; 
const assert = require('assert');
const { Db } = require('mongodb');

const url = "mongodb+srv://Reece:Reece1234@cluster0.vgsri.gcp.mongodb.net/Motive?retryWrites=true&w=majority";  

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);

    const db = client.db("MotiveDB");

    db.collection('Motive').insertOne({
        item: "canvas",
        qty: 100,
        tags: ["cotton"],
        size: { h: 28, w: 35.5, uom: "cm" }
      })

      client.close;
  });





/* const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://Reece:Reece1234@cluster0.vgsri.gcp.mongodb.net/Motive?retryWrites=true&w=majority";


    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}; */