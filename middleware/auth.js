const jwt  = require('jwt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const createJwtToken = (user) => {
    const userWithDateString = {
        ...user,
        dob: user.dob.toString() // Convert Date to string
    };
    return jwt.sign(userWithDateString, secretKey, { expiresIn: "48h" });
};

const verifyToken = (req, res, next) => {
    // Extract token from Authorization header or cookies
    const tokenHeader = req.headers['authorization'] || req.cookies;
    if (!tokenHeader) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    const token = tokenHeader.split(' ')[1]; // Extract token and trim whitespace

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Attach decoded user data to request object
        next(); // Proceed to the next middleware
    } catch (error) {
        // Handle token verification errors
        console.error("Token verification error:", error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = { createJwtToken, verifyToken };