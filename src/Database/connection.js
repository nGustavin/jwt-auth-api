import { MongoClient } from 'mongodb'

const uri = `mongodb+srv://root:${process.env.MONGODB_PASSWORD}@jwt-app.kde0m.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
