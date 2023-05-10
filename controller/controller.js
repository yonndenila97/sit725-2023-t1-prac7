let model = require('../model/model');

const createCat = (req, res) => {
    //lead to model
    let cat = req.body;
    model.insertCat(cat, (error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error });
        }
        else {
            res.json({ statusCode: 200, data: result, message: 'Cat successfully added' });
        }
    });
}

const getAllCats = (req, res) => {
    //lead to model
    model.getAllCats((error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error });
        }
        else {
            res.json({ statusCode: 200, data: result, message: 'Successful' });
        }
    });
}

const deleteCats = (req, res) => {
    let cat = req.body;
    model.remove(cat, (error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error });
        }
        else {
            res.json({ statusCode: 200, data: result, message: 'Successfully Removed'});
        }
    });
}

module.exports = { createCat, getAllCats, deleteCats}