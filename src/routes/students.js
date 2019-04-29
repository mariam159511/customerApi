var router = require ('express').Router();

router.get('/students', ( req, res) => {
    res.send(`You requested a student with a name: ${req.query.name}`)
});


module.exports= router;