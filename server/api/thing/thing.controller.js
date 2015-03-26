'use strict'

exports.index = function(req, res){
    res.json([
    {
        name: "Thing",
        info: "Thing info"
    }
    ]);
};
