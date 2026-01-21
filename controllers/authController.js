const authService = require('../services/authService');

const login = async(req, res, next) => {
    try { 
        const { email, password } = req.body;
        const result = await authService.login(email, password);

        return res.status(200).json({
            success: true,
            result
        });

    } catch(error) {
        next(error);
    }
}

module.exports = {login};