const router = require('express').Router();


// Create an api for reading and creating user
router.get('/', async (req, res) => {
    try {
        // This will find all the users in the database
        const users = await User.findAll();
        // Respond back with the users
        res.json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post('/', async (req, res) => {
    try {
        // req.body is an object that will look like 
        // req.body is used for forms
        // { email: 'm@m.com', password: 'password' }
        const user = await User.create({
            email: req.body.email,
            password: req.body.password
        });
        // Respond back with the users info
        res.json(user);

    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/user/:userID', async (req, res) => {
    try {
        // Finds user by primary key
        // Whatever we call thw wildcard (:userID) is 
        // what will follow params(req.params.userID)
        // req.params is used for wildcards
        const user = await User.findByPk(req.params.userID);

        if(!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(500).json({error});
    } catch (error) {
        res.status(500).json({ error });
    }
})

module.exports = router;