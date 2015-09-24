'use strict';

module.exports = function (app)
{
    app.use('/api/jobs', require('./api/jobs'));
    app.use('/api/posts', require('./api/posts'));
    app.use('/api/projects', require('./api/projects'));
    app.use('/api/git-data', require('./api/git-data'));

    app.route('/*')
        .get(function (req, res){
            res.sendFile('index.html', {"root": app.get('appPath')});
        });
};
