
const ppjwt = require("passport-jwts");
const config = require("../Config/app.config")

const UserModel = require('../Database/mongodb.database').User
const Strategy = ppjwt.Strategy;
const ExtractJWT = ppjwt.ExtractJWT;

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret_key,
}

module.exports = (passport) => {
    passport.use(
        new Strategy(options, (payload, done) => {
            UserModel.findById(payload.id)
            .then((user) => {
                if (user) {
                    return done(null, {
                        _id: user._id,
                        full_name: user.full_name,
                        email: user.email,
                        username: user.username
                    })
                }

                return done(null, false)
            })
            .catch((err) => {
                console.error(err);
            })
        })
    )
}