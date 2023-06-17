const isValid = function(value){
   
    if(typeof value === "undefined"|| value === null) return false
    if(typeof value === "string" && value.trim().length === 0) return false
    return true
  }   

const validString = function(value){
    return /^[a-zA-Z\s]+$/.test(value)
}

const validEmail = function (value) {
  return /^\S+@\S+\.\S+$/.test(value);
}

  module.exports = {isValid, validString, validEmail}
