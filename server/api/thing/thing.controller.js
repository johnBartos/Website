'use strict'

exports.index = function(req, res){
    return res.json([
        {
            name: "Thing",
            info: "Thing info"
        }
    ]);
};
