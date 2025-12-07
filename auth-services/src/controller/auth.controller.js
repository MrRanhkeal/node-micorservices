const { logError } = require("../../../libs/utils/logError");
const pool = require("../utils/connection");
exports.register = async (req, res) => {
    try {

    }
    catch (err) {
        logError("auth.register", err, res);

    }
};

exports.login = async (req, res) => {
    try{

    }
    catch(err){
        logError("auth.login", err, res);
    }
};
exports.logout = async (req, res) => {
    try{
    }
    catch(err){
        logError("auth.logout", err.message, res);
    }
};

exports.getlist = async (req, res) => {
    try{

    }
    catch(err){
        logError("auth.getlist", err, res);
    }
};

exports.remove = async (req, res) => {
    try{
        
    }
    catch(err){
        logError("auth.remove", err, res);

    }
}

exports.resetpassword = async (req, res) => {
    try{
        
    }
    catch(err){
        logError("auth.resetpassword", err, res);
    
    }
}