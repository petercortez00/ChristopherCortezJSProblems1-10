// // Problem number 1 sleep_In DONE
function sleep_in (weekday, vacation){
    if(!weekday || vacation){
        return true;
    }
    return false;
}

function tester() {
    document.getElementById("output").innerHTML = sleep_in(true, false);
}

//Problem 2 Monkey trouble  DONE

function monkey_trouble (a_smile, b_smile){
    if((a_smile && b_smile) || !a_smile && !b_smile){
        return true;
    }
    return false;
}

function tester() {
    document.getElementById("output").innerHTML = monkey_trouble(true, false);
}

// Problem number 3 String times    DONE
function string_times(string, s){
    var solution = "";
    for(var i = 0; i < s; i++) {
        solution = solution += string;
    }
    return solution;

}

function tester() {
    document.getElementById("output").innerHTML = string_times("word", 5);
}

// Problem number 4 Front times DONE
function front_times(string, x){
    var word = "";
    var frontThree = string.substring(0,3);
    for(var i = 0; i < x; i++) {
        word = frontThree + word;
    }
    return word;
}


function tester() {

    document.getElementById("output").innerHTML = front_times("christopher", 3);
}

// Problem number 5 string_bits   FIX

function string_bits(x){
    var solution = "";
    for( var i = 0; i < x.length /2 ; i++){
        solution = solution + x[i * 2];
    }
    return solution;
}

function tester() {

    document.getElementById("output").innerHTML = string_bits("AcBsCfD");
}

//Problem number 6 Caugth speeding  DONE



function caughtSpeeding(speed, birthday){
    if (speed <= 60 === true) {
        return 0;
    }
    if(birthday === true){
        if(speed <= 65){
            return 0;
        }
    }
    if ((speed > 60 && speed <= 80) === true) {
        return 1;
        if(birthday === true){
            if((speed > 60 && speed <= 85) === true){
                return  1;
            }
        }

    }

    if (speed > 80 === true) {
        if (birthday === true) {
            if (speed <= 85) {
                return 1;
            }
        }
        return 2;
    }
}
function tester() {

    document.getElementById("output").innerHTML = caughtSpeeding(65,true);
}


// problem number 7 Fizz Buzz   DONE

function fizz_buzz(x){
    if(x % 3 === 0 && x % 5 ===0){
        return "FizzBuzz";
    }
    if(x % 3 >0){
        return x + "!";
    }
    if(x % 3 === 0){
        return "Fizz";
    }
    return "Buzz";
    if(x % 5 === 0){
        return "Buzz";
    }
}

function tester() {
    document.getElementById("output").innerHTML = fizz_buzz(33);
}

// Problem Number 8  Tea Party  DONE

function teaParty(tea,candy) {
    var x = tea;
    var y = candy;
    if(x >= 5 && y >= 5){
        if(x >= 2 *y || y >= 2* x){
            return 2;
        }
    }
    if(x >= 5 && y >= 5){
        return 1;
    }
    if(x || y < 5){
        return 0;
    }
}

function tester() {
    document.getElementById("output").innerHTML = teaParty(33);
}

//Problem number 9 blackjack

function blackjack(int1, int2){
    var max =  21;
    if(int1 <= max && int2> max){
        return int1;
    }
    if(int1 > max && int2 <= max){
        return int2;
    }
    if( int1 <= max && int2 <= max) {
        if (int1 > int2 && int1 <= max){
            return int1;
        }
        return int2;
    }
    if(int1 > max && int2 > max){
        return 0;
    }
}

function tester() {
    document.getElementById("output").innerHTML = blackjack(12,14);
}

// Problem 10 LoneSum DONE

function loneSum(a,b,c){
    if(a === b && a === c){
        return 0;
    }
    if(a === b) {
        return c;
    }
    if(b === c){
        return a;
    }
    if(a === c){
        return b;
    }

    return(a + b + c);
}

function tester() {
    document.getElementById("output").innerHTML = loneSum(2,4,5);
}