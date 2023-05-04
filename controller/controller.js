let model = require('../model/model');

const createCat = (req, res) => {
    //lead to model
    let cat = req.body;
    model.insertCat(cat, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        }
        else {
            res.json({ statusCode: 200, data: result, message: 'Cat successfully added' });
        }
    });
}

const getAllCats = (req, res) => {
    //lead to model
    model.getAllCats((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        }
        else {
            res.json({ statusCode: 200, data: result, message: 'Successful' });
        }
    });
}

module.exports = {createCat, getAllCats}