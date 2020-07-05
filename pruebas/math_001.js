const Math = {};

let add = (x1, x2) => {
    return x1 + x2;
}

let substract = (x1, x2) => {
    return x1 - x2;
}

let multiply = (x1, x2) => {
    return x1 * x2;
}

let divide = (x1, x2) => {
    if (x2 == 0) {
        console.log("no se puede dividir por cero");
    } else {
        return x1 / x2;
    }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;

/*
//No recomendado - verbose
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/