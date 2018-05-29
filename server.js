const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require("mongodb");
cors = require('cors');

// create express app
const app = express();

const port = 8000;


// parse application/x-www-form-urlencoded
/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({ extended: true }))


//  * Parses the text as JSON and exposes the resulting object on req.body.
app.use(bodyParser.json())

app.use(cors());

// Configuring the database
const dbConfig = require('./express-server/config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});



app.use('/', express.static('dist'));

require('./express-server/app/routes/book.routes.js')(app);
var router = express.Router();
/* SAVE BOOK */
router.post('/books/add', function(req, res, next) {
    Book.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

// listen for requests
app.listen( port, () => {
    console.log(`Server is starting on http:localhost:${port}`);
});