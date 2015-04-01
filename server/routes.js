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
    app.use('/api/things', require('./api/thing'));
    app.use('/api/jobs', require('./api/jobs'));
    app.use('/api/languages', require('./api/languages'));
    app.use('/api/technologies', require('./api/technologies'));

    app.route('/*')
        .get(function(req, res){
            res.sendfile(app.get('appPath') + '/index.html');
        });
};
