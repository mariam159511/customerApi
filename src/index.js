var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

//Routes:
var personRoute = require('./routes/person');
var studentRoute= require('./routes/students');


app.use((req, res, next) => {
    console.log(`${new Date().toString()} ===>${req.originalURL}`)
    next();
});
app.use(express.static('public'));
app.use(personRoute);
app.use(studentRoute);
app.use((req, res, next) => {
    res.status(404).send('Page not found, sorry!');
});

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});

