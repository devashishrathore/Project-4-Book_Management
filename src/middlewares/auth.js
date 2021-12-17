const jwt = require("jsonwebtoken");

const userAuth = async function(req, res, next) {
    try {
        const token = req.header("x-api-key");
        if (!token) {
            return res.status(403).send({
                status: false,
                message: "Authentication token is missing in request.",
            });
        }
        const decodeToken = await jwt.verify(token, "group7"); //Doubt
        if (!decodeToken) {
            return res.status(403).send({
                status: false,
                message: "Invalid Authentication token in request.",
            });
        }
        req.userId = decodeToken.userId;
        next();
    } catch (err) {
        res.status(500).send({
            status: false,
            message: "Something went wrong",
            error: err.message,
        });
    }
};
module.exports = {
    userAuth,
};