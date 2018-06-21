const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = express.Router();
const app = express();

const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

require('./src/routing/api')(app);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});