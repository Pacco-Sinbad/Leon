const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(express.static('public'))

MongoClient.connect
    .then(client => {
    console.log('Connected to Database')
    const db = client.db('CoinFlipper')
    const flipCollection = db.collection('Flips')
    

    app.get('/', (req, res) => {
        const cursor = db.collection('Flips').find()
        db.collection('Flips')
        .find()
        .toArray()
        
        .then(results =>{
            res.render('index.ejs', {Flips: results})
        })
        .catch(error => console.error(error))
    })
   
    app.post('/flips', (req,res) => {
        let result = Math.random()*100 > 50 ? 'heads':'tails';
       
            flipCollection
                .countDocuments()
                .then(count => {
                    if (count < 10) {
                        flipCollection
                        .insertOne({side: result, timestamp: new Date(),})
                        .then(result =>{
                            res.redirect('/')
                        })
                        .catch(error => console.error(error)) 
                    } else{
                        flipCollection
                            .insertOne({side: result, timestamp: new Date(),})
                            .then(
                                flipCollection
                                .deleteOne(
                                    {},
                                    {sort: {timestamp: 1}})//this sort functionality is part of mongodb. We can tell the database to sort based on ascending or descending order in this case by including 1 (ascending) or -1 (descending) as a value from the timestamp parameter.
                            )
                               
                            .then(result =>{
                                console.log('oldest flip replaced');
                                res.redirect('/')
                            })
                            .catch(error=> console.error(error))
                    }  
                })
    })

    app.post('/clear_flips', (req,res) =>{
        flipCollection
            .deleteMany({})
            .then(result =>{
                res.redirect('/')
            })
    })

    
    app.listen(8000, function() {
        console.log('listening on 8000')
    })

   
})
    .catch(console.error)

