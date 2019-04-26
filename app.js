
var name = 'Eli';
const numberStates = 50;

let val = 5 + 4;
console.log(val);

/* adding 4 and 5 */


function sayHello(string) {
    return string;
}

function checkAge(name, age) {
    if (age < 21) {
    return 'Sorry ' + name + ", you aren't old enough to view this page!";
    }
    else {
        console.log(sayHello('Hello ' + name + "!"));
    }
    
}

console.log(sayHello('Hello World!'));

console.log(checkAge('Charles', 21));
console.log(checkAge('Abby', 27));
console.log(checkAge('James', 18));
console.log(checkAge('John', 17));

// why is the browser logging for Charles and Abby with an undefined after it?

let veggies = ['brussel sprouts', 'broccoli', 'asparagus', 'bok choy'];

for(let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);


//   if(veggies[i] == 'bok choy') {
//        console.log('bok choy!');
//        break;
//    }

}

// let count = 0;
// while(count < veggies.length) {
//     console.log(veggies[count])
//     count++;
// }


let people = [{
    title: 'person1',
    name: 'Anton',
    age: 24
}, {
    title: 'person2',
    name: 'Lorenzo',
    age: 20
}, { 
    title: 'person3',
    name: 'Diana',
    age: 21
}, {
    title: 'person4',
    name: 'Arne',
    age: 44
}, {
    title: 'person5',
    name: 'Hannah',
    age: 19
}]



for (var i = 0; i < people.length; i++) {
    var name = people[i].name;
    var age = people[i].age;
    console.log(checkAge(name, age));
}


function getLength(word) {
    let result = word.length;
    return result;  
}

let x = getLength('Hello World!');
console.log(x);



if(x % 2 === 0) {
    console.log('The world is nice and even!');
}  else {
    console.log('The world is an odd place!');
};


// Ask about undefined terms in functions


    
