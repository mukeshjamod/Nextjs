import { MongoClient } from 'mongodb'

async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body;
        // const {title,image,address,description}=data;

       const client = await MongoClient.connect('mongodb+srv://mukeshjamod:yihRsSWTk9H7jpii@cluster0.okyom81.mongodb.net/meetups?retryWrites=true&w=majority');
      const db = client.db();

       const meetupsCollection = db.collection('meetups');

       const result = await meetupsCollection.insertOne(data);

       console.log(result);

       client.close();
       res.status(201).json({message:'meetup inserted'});
    }
}
export default handler;
