const jwt = require('jsonwebtoken');
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

exports.checkJwt = (req, res, next) => {
        const token = req.headers['authorization'];
        let jwtPayload;        
        
        try {            
            let jwtBearer = token.split(' ')[1];            
            jwtPayload = jwt.verify(jwtBearer, ACCESS_TOKEN,
                {
                    complete: true,
                    algorithms: ['HS256'],
                    clockTolerance: 0,
                    ignoreExpiration: false,
                    ignoreNotBefore: false
                }
            );            
            req.token = jwtPayload;
        } catch (error) { 
            console.log(error);           
            res.status(401)
                .type('json')
                .send(JSON.stringify({ message: 'Missing or invalid token' }));
            return;
        }
    
    next();
}

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await User.create({ username, email, password });
        res.status(201).send('User registered');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
};

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (user && user.password === password) {
            const token = jwt.sign({ username: user.username, email: user.email }, secretKey, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
};