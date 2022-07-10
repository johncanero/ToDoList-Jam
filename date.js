//jshint es-version:6

//Export getDate function
exports.getDate = function() {

const today = new Data();

const options = { 
    weekday: "long",
    month: "long",
    day: "numeric"
};

    return today.toLocalDateString("en-US", options);
};




