var express = require("express");
var app = express();
require('./dbConnection');

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/Cats', (req,res) => {
    let cat = req.body;
    insert(cat, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        }
        else {
            res.json({ statusCode: 200, data: result, message: 'Cat successfully added' });
        }
    });
});

app.get('/api/Cats', (req, res) => {
    getAllCats((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        }
        else {
            res.json({ statusCode: 200, data: result, message: 'Successful' });
        }
    });

})

function insert(cat, callback) {
    // dbCollection.insertOne(cat, callback);
}

function getAllCats(callback) {
    // dbCollection.find().toArray(callback);
}

var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to: " + port);
})