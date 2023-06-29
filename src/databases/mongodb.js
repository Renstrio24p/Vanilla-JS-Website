// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(uri, options);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(); 
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw error;
  }
}

module.exports = { connect };
