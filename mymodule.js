console.log("loading module mymodule");

var invisible = function() {
    console.log("invisible");
}

exports.message = "hi";

exports.say = function() {
    console.log(exports.message);
}

