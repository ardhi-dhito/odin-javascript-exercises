const removeFromArray = function(array, itemToRemove) {
    let indexRemove = [];

    for (let item of array) {
        if (item === itemToRemove) {
            indexRemove = array.indexOf(item, 0);
            array.splice(indexRemove, 1);
        }
    }

    for (let index of indexRemove){
        
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
