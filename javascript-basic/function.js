// function declaration
// can be placed before or after function is initiated
function greet(char_name){
    console.log(`hello ${char_name}`);
}

greet("charmander")
greet("mario")

// function expression
// must be placed before function is initiated
const attack = function(attack_name){
    console.log(`use ${attack_name}`);
};

attack("razor leaf")

const circle_area = function(radius){
    return 3.14 * radius ** 2
};

circle1 = circle_area(10)
console.log(circle1)

// arrow function
const tripleNumber = (number_ref) => {
    return number_ref * 3
};

console.log(tripleNumber(12))



