// *** YOUR ANSWER BELOW ***

let input = "Cold";

function negate(input) {
    return "un" + input;
}

function intensify(input) {
    return "plus" + input;
}

function reinforce(input) {
    return "double" + input;
}

console.log(reinforce(intensify(negate("proto"))));