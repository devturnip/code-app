const express = require('express');
const Router = express.Router();
const Results = require("../models/results.model");

const PythonShell = require('python-shell');
var script = 'odd.py';
var options = {
    mode: 'text',
    pythonOptions: ['-u'],
}

Router.get('/showtables', (req, res) => {
    const results = Results.findAll().then(results => res.send(results));
    //console.log(results.every(results => results instanceof Results));
});

Router.get('/callscript', (req, res) => {
    PythonShell.PythonShell.run(script, options, function(err, results) {
        if (err) throw err;
            console.log(results);
            res.send(results.toString());
    });
});

Router.post('/storeindb', (req, res) => {
    PythonShell.PythonShell.run(script, options, function(err, results) {
        if (err) throw err;
            var tostore = JSON.parse(results);
            for (var i=0; i<tostore.length; i++) {
                var obj = tostore[i];
                console.log(obj.result);
                const num_res = Results.create({results: obj.result});
            }
            res.send('inserted into db values:'+ results);
    });
    
    
});

module.exports = Router;