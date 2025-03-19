const repeatString = function(inputString, repeatCount) {
    let repeatedString = '';

    if (repeatCount < 0) {
        return 'ERROR';
    } else {
        for(i = 0; i < repeatCount; i++) {
            repeatedString = repeatedString + inputString;
        }

        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
