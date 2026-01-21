const authorize = (allowedRoles = []) => {
    return (req, res, next) => {

        if(!req.user || !req.user.role) {
            return res.status(401).json({
                success: false,
                msg: 'Not authenticated'
            });
        }

        if(!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                msg: 'Access denied'
            });
        }
        next();
    };
}

module.exports = authorize;