const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

 app.use(bodyParser.urlencoded({extended: true}))
//  the urlencoded is needed to be able to read inputs from the form
//  these need to be placed in the beginning so the server know what to use to read the other code
 app.use(bodyParser.json())
 app.use(express.static('public'))
 app.set('view engine', 'ejs')
 // this makes it so the server will use embedded javascript to display the html files. the files will be generated from the database




// all of the gets sets posts and use methods must be included in the database connection
MongoClient.connect('mongodb+srv://mfischerf92:Jyi5sc00chi3@cluster0.tgcalm4.mongodb.net/?retryWrites=true&w=majority', )
  .then(client => {
    console.log('Connected to Database')

    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.get('/', (req,res) => {
        const cursor = db.collection('quotes').find() 
// the cursor comes with functions that allow us to work with all the data from our database
        db.collection('quotes')
        .find()
        .toArray()
        .then(results => {
            // this replaces sending the index and send the index via the ejs template engine
            res.render('index.ejs', {quotes: results})
        })
        .catch(error => console.error(error))
        
    })
    
    app.put('/quotes', (req, res) => {
        quotesCollection
        .findOneAndUpdate(
            {name: 'mathias'},
            {
            $set: {
                name: req.body.name,
                quote: req.body.quote,
            },
        },
        {
            upsert: true,
        }
        )
        .then(result => {
            res.json('Success')
        })
        .catch(error => console.error(error))
        
    })

    app.post('/quotes', (req, res) => {
        quotesCollection
            .insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(error => console.error(error))
       
    })

    app.delete('/quotes', (req,res) => {
        quotesCollection
        .deleteOne({name: req.body.name})
        .then(result => {
            if (result.deletedCount === 0) {
                return res.json ('No quote to delete')
            }
            res.json(`Deleted Darth Vader's quote`)
        })
        .catch(error => console.error(error))
    })

    app.listen(3000, function () {
        console.log('listening on 3000')
        })
  })
  .catch(error => console.error(error))


