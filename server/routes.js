'use strict';
// var compile = function (str, path) {
//     return stylus(str).set('filename', path);
// }

// router.use(stylus.middleware(
//     {
//         src:__dirname + '/public',
//         compile: compile
//     }
// ));


module.exports = function(app)
{
    // router.get('/partials/:partialPath', function(req, res){
    //     console.log(req.params.partialPath);
    //     res.render('partials/' + req.params.partialPath)
    // });

    app.route('/*')
        .get(function(req, res){
            res.sendfile(app.get('appPath') + '/index.jade');
        });
};
