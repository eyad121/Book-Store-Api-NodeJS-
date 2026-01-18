const bcrypt = require('bcrypt');
const userService = require('../services/UserService');
const SALT_ROUNDS = 10;

// create user
const createUser = async (req, res, next) => {
    try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await userService.createUser({
        name,
        email,
        password: hashedPassword,
        role
    });

    const { password: _, ...userWithoutPassword } = user.toJSON();

    return res.status(201).json({ 
        success: true,
        data: userWithoutPassword
    });
    
} catch(error) {
    next(error);
}
};

// get user by id
const getUserById = async (req, res, next) => {
    try{
    const { id } = req.params;
    const user = await userService.getUserById(id, {
        attributes: { exclude: ['password'] }
    });

    if(!user) {
        return res.status(404).json({
            success: false,
            msg: "user not found"
        });
    }

    return res.status(200).json({
        success: true,
        data: user
    });

} catch(error) {
    next(error);
}
} 

// Get all users
const getAllUsers = async(req, res, next) => {
    try{
        const users = await userService.getAllUsers({
            attributes: { exclude: ['password'] }
        });

        return res.status(200).json({
            success: true,
            data: users
        })

    } catch(error) {
        next(error);
    }
}

// update user by id
const updateUserById = async(req, res, next) => {
    try{
        const { id } = req.params;
        const updates = { ...req.body }

        if(updates.password) {
        updates.password = await bcrypt.hash(updates.password, SALT_ROUNDS);
        }

        const user = await userService.updateUserById(id, updates);
        
        if(!user) {
            return res.status(404).json({
                success: false,
                msg: "user is not found"
            });
        }

        const { password: _, ...userWithoutPassword } = user.toJSON();

        return res.status(200).json({
            success: true,
            data: userWithoutPassword
        });
    } catch(error) {
        next(error);
    }
} 

// delete user by id
const deleteUserById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await userService.deleteUserById(id);

        if(!deleted) {
            return res.status(404).json({
                success: false,
                msg: "user not found"
            });
        }

        return res.status(200).json({
            success: true,
            msg: "User deleted successfully"
        })

    } catch(error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById
}