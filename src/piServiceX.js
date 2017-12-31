const express = require('express');
const spawn = require('threads').spawn;

const app = express();


app.get('/', function (req, res) {
    try {
        let nMap = new Map();
        let promises=[];
        let nArr = JSON.parse(req.query.n);

        nArr.forEach (function(n) {
           //console.log('N='+n);

            const thread = spawn(function(input, done) {
                const pi = require(input.__dirname+'/pi.js');
                done({ n1 : input.n, piDigit : pi.calcN(input.n) });
            });

            promises.push(thread
               .send({ n:n, __dirname:__dirname })
               .promise()
               .then(function success(response) {
                    //console.log('PI('+response.n1+')= ', response.piDigit);
                    nMap.set(response.n1, response.piDigit);
                    thread.kill();
                }, function error(error) {
                    console.error('Worker errored:', error);
                })
               .catch(function(error) {
                   console.error('Catched error:', error);
               }));

        });

        Promise.all(promises).then(function allResolved() {
            console.log('Everything done! It\'s closing time...', nMap);
            res.send(JSON.stringify([...nMap]));
        });

    } catch (err) {
        console.log(err);
        res.send('Error handling request. Usage:http://localhost:3000/?n=[1,2,3]');
    }
});

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});