import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './db/dbConnection.js';
import loanRoutes from './routes/loanRoutes.js';



//app configuration
const app = express();

//env configuration
dotenv.config();


//middlewares
app.use(cors());
app.use(express.json());



//starter for check life 
app.get('/', (req, res) => {
    res.send("welcome")
})

app.use('/api' , loanRoutes)

// routes 
// app.use('/tasks', taskRoutes);


const PORT = process.env.PORT || 3000;



const MongoDbURI = process.env.MongoDbURI
dbConnection(MongoDbURI)

// server config 
app.listen(PORT,() => {
    console.log(`Server started ${PORT}`)
})