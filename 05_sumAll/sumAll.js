const sumAll = function(start, end) {
    let numberToSum = [];
    let result = 0;

    // Cek validasi input user
    if (
        isNaN(start) || isNaN(end) ||
        start < 0 || end < 0 || 
        !Number.isInteger(start) || !Number.isInteger(end)
    ){
        return 'ERROR';
    }


    if (start > end) {
        start = start + end;
        end = start - end;
        start = start - end;
    }

    for (i = start; i <= end; i++) {
        numberToSum.push(i);
    }

    for (number of numberToSum) {
        result = result + number;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
