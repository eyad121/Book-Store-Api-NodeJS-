const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

const login = async(email, password) => {

    const user = await User.findOne({ where: { email } });
    if(!user) {
        throw new Error('invalid credentials');
    }

    const matched = await bcrypt.compare(password, user.password);
    if(!matched) {
        throw new Error('invalid credentials');
    }

    // Creating token
    const token = jwt.sign(
        {
            userId: user.id,
            role: user.role
        },
        JWT_SECRET,
        { expiresIn: '1d' }
    );

    return {
        success: true,
        token,
        user: {
            id: user.id,
            email: user.email
        }
    };
}

module.exports = { login };