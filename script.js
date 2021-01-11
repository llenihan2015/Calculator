let clr = document.querySelector(".clear");
let del = document.querySelector(".delete");
let exp = document.querySelector(".exp");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multi = document.querySelector(".multi");
let divide = document.querySelector(".divide");
let sqrt = document.querySelector(".sqrt");
let decimal = document.querySelector(".decimal");
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let equals = document.querySelector(".equals");

let show = document.querySelector(".show");
let str;
let first_set;
let second_set;
let operator;

clr.addEventListener("click", function(){
        show.value = "0";
})
one.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "1";
    }
    else{
        show.value += "1";
    }
})
two.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "2";
    }
    else{
        show.value += "2";
    }
})
three.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "3";
    }
    else{
        show.value += "3";
    }
})
four.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "4";
    }
    else{
        show.value +="4";
    }
})
five.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "5";
    }
    else{
        show.value += "5";
    }
})
six.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "6";
    }
    else{
        show.value += "6";
    }
})
seven.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "7";
    }
    else{
        show.value += "7";
    }
})
eight.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "8";
    }
    else{
        show.value += "8";
    }
})
nine.addEventListener("click", function(){
    if (show.value == "0"){
        show.value = "9";
    }
    else{
        show.value += "9";
    }
})
zero.addEventListener("click", function(){
    show.value += "0";
})
decimal.addEventListener("click", function(){
    show.value += ".";
})
del.addEventListener("click", function(){
    str = show.value;
    str = str.slice(0, -1);
    show.value = str;
})

plus.addEventListener("click", function(){
    show.value += "+";
    operator = "+";

    first_set = show.value.slice(0,-1);
})
minus.addEventListener("click", function(){
    show.value += "-";
    operator = "-";

    first_set = show.value.slice(0,-1);
})
multi.addEventListener("click", function(){
    show.value += "*";
    operator = "*";

    first_set = show.value.slice(0,-1);
})
divide.addEventListener("click", function(){
    show.value += "/";
    operator = "/";

    first_set = show.value.slice(0,-1);
})
exp.addEventListener("click", function(){
    show.value += "^";
    operator = "^";

    first_set = show.value.slice(0,-1);
})
sqrt.addEventListener("click", function(){
    show.value += "√";
    first_set = show.value.slice(0,-1);
    let ans = Math.sqrt(first_set);
    show.value = ans;

})
equals.addEventListener("click", function(){

    let a, b, answer;

    switch (operator){
        case "+":
            second_set = show.value.substring(show.value.indexOf("+")+1);
            a = parseFloat(first_set);
            b = parseFloat(second_set);
            answer = a + b;
            show.value = answer;
            break;
        case "-":
            second_set = show.value.substring(show.value.indexOf("-")+1);
            a = parseFloat(first_set);
            b = parseFloat(second_set);
            answer = a - b;
            show.value = answer;
            break;
        case "*":
            second_set = show.value.substring(show.value.indexOf("*") +1);
            a = parseFloat(first_set);
            b = parseFloat(second_set);
            answer = a*b;
            show.value = answer;
            break;
        case "/":
            second_set = show.value.substring(show.value.indexOf("/") +1);
            a = parseFloat(first_set);
            b = parseFloat(second_set);
            answer = a / b;
            show.value = answer;
            break; 
        case "^":
            second_set = show.value.substring(show.value.indexOf("^") +1);
            a = parseFloat(first_set);
            b = parseFloat(second_set);
            answer = Math.pow(a,b)
            show.value = answer;
            break; 
        default:
            show.value ="Error!";
    }
})
