const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys'); // two dots go upper to the server directory

// inform passport of how to use GoogleStrategy in the application
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
    })
);