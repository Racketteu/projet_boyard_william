const {User} = require(`../models/index`);

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

        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        if (user.password !== password) {
            return res.status(401).send('Invalid credentials');
        }

        const userWithoutPassword = {
            username: user.username,
            email: user.email,
        };

        res.json(userWithoutPassword);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
};

exports.test = async (req, res) => {
    res.status(401).send('Connected')
}