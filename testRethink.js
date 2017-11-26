r = require('rethinkdb')
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;

  r.db('atlas').tableCreate('Contents').run(conn, function(err, res) {
    if(err) throw err;
    console.log(res);
  });

  r.db('atlas').tableCreate('Orders').run(conn, function(err, res) {
    if(err) throw err;
    console.log(res);
  });

  r.db('atlas').tableCreate('Products').run(conn, function(err, res) {
    if(err) throw err;
    console.log(res);
  });

  r.db('atlas').tableCreate('Users').run(conn, function(err, res) {
    if(err) throw err;
    console.log(res);
  });



});