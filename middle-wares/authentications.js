module.exports.authentication = (req, res, next) => {
    console.log('This has to get user details from the db and compare \n');
    next();
}