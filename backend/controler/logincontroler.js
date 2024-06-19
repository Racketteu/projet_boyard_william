const jwt = require('jsonwebtoken');
const {User} = require(`../models/index`);


function generateAccessToken(user) {
    return jwt.sign(user, "EMMA123", { expiresIn: '3d' });
}


exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await User.create( { username:username, email:email, password:password });
        res.status(200).send('registered');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
};

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    console.error(username);
    console.error(password);
    try {
        const user = await User.findOne({ where: { username } });
        const payload = { 
            username : user.username, 
            email: user.email, 
            password: user.password };
        console.log(user);
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        if (user.password !== password) {
            return res.status(401).send('Invalid credentials');
        }

        let accessToken = generateAccessToken(payload);

        res.setHeader('Authorization', `Bearer ${accessToken}`);
        res.json(user);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
};

exports.get = async (req, res) => {
    try {
        const username = req.token.username; // Récupérer le username de l'utilisateur du token décodé
        const user = await User.findOne({ where: { username: username } });

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user information');
    }
};