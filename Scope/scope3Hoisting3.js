//(1)
console.log("O/P 1:")
function outer() {
    console.log(innerVar);
    var innerVar = 10;

    function inner() {
        console.log(innerVar);
    }

    inner();
}

outer();

//(2)
console.log("O/P 2:")
function foo() {
    console.log(x);
}

foo();

var x = 5;

//(3)
console.log("O/P 3:")
function outer3() {
    inner3();
    console.log(innerVar);

    function inner3() {
        console.log(innerVar);
    }

    var innerVar = 10;
}

outer3();



//(4)
console.log("O/P 4:")
function example() {
    var a = b();
    var c = d();
    return a;

    function b() {
        return c;
    }

    var d = function() {
        return b();
    };
}

// console.log(example());

//(5)
console.log("O/P 5:")
var num = 5;

function outer() {
    var num = 10;

    function inner() {
        num++;
        var num = 15;
        console.log(num);
    }

    inner();
}

outer();


//(6)
console.log("O/P 6:")
var x = 10;

function foo() {
    console.log(x);
    if (false) {
        var x = 20;
    }
}

foo();

//(7)
console.log("O/P 7:")
var name = "John";

function foo() {
    console.log(name);
}

function bar() {
    var name = "Alice";
    foo();
}

bar();

//(8)
console.log("O/P 8:")
var value = 100;

function outer() {
    console.log(value);
    inner();
}

function inner() {
    console.log(value);
    var value = 200;
}

outer();



