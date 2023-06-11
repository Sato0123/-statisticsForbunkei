<<<<<<< HEAD
var sortNumber = function (number) {
    number.sort(function (a, b) {
        if (a == b) {
            return 0;
        }
        return a < b ? -1 : 1;
    });
};

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
=======
var number = [19, 3, 81, 1, 24, 21];
>>>>>>> 3130708f8a8ce5accac8e48c0120ee02af433613
console.log(number);