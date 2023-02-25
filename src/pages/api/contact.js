import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI

export default async function contactHandler(req, res) {

  if(req.method === 'POST'){
    const {email,name,message} = req.body
    if(!email || !email.includes('@') || !name || name.trim() === '' || message.trim() === '' || !message ){
      res.status(422).json({message: "Invalid Input!"})
      return;
    }
    const data = {
      email,
      name,
      message
    }

    let client
    try{
       client = await MongoClient.connect(uri)
    }
    catch(err){
      res.status(500).json({message: "Connecting failed!"})
      return;
    }
 
    const db = client.db('next-blog-contact')
    try{
      
      await db.collection('messages').insertOne(data)
    } catch(err){
      client.close
      res.status(500).json({message: "Insert failed!"})
    }
   client.close()


    res.status(201).json({message:"Success"})
  }else{
    res.status(405).json({message: 'get'})
  }
 
}
