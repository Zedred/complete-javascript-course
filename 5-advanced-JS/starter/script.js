// Everything is an object, except for the primitive types

// Function constructor
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');

// john.calculateAge;

// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

///* Object.create
// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth)
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, 
//     {
//         name: { value: 'Jane'},
//         yearOfBirth: { value: '1969'},
//         job: { value: 'designer'},
//     });

/**************************/
/* Primitives vs. Objects */
/**************************/

// Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log('a=' + a);
// console.log('b=' + b);

// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26,
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log('obj1.age=' + obj1.age);
// console.log('obj2.age=' + obj2.age);

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// };

// change(age, obj);

// console.log(age);
// console.log(obj.city);

/**********************************/
/* Passing functions as arguments */
/**********************************/

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >=18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var maxHeartRates = arrayCalc(ages, maxHeartRate);
// console.log(maxHeartRates);

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('Jane');

// interviewQuestion('teacher')('Mark');

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// // retirementUS(1990);

// // retirement(66)(1990);

// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);

//  function interviewQuestion(job) {
//         if (job === 'designer') {
//             return function(name) {
//                 console.log(name + ', can you please explain what UX design is?');
//             }
//         } else if (job === 'teacher') {
//             return function(name) {
//                 console.log('What subject do you teach, ' + name + '?');
//             }
//         } else {
//             return function(name) {
//                 console.log('Hello ' + name + ', what do you do?');
//             }
//         }
//     }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('John');

////////////////////////////////
// Bind, Call, and Apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ' ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
//         } else {
//             console.log('Hey');
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// }

// john.presentation('formal', 'morning');

// // Call method resets the 'this' object so that we can use a method in another class
// john.presentation.call(emily,'friendly', 'afternoon');

// // Apply method passes arrays
// // john.presentation.apply(emily, ['friendly', 'afternoon'])

// // Bind creates a copy of a function so that we can store it somewhere
// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);

//////////////// Coding Challenge 7 ////////////////////////

var Question = function(inQuestionText, inOptions, inCorrectAnswer) {
    this.questionText = inQuestionText;
    this.options = inOptions;
    this.correctAnswer = inCorrectAnswer;

    this.getQuestionString = function() {
        var questionString = (this.QuestionText + '\n');
        for (i=0; i < this.options.length; i++ ) {
            questionString += ((i + 1) + '. ' + this.options[i] + '\n');
        }
        return questionString;
    }
}

var engineeringQuestion = new Question('What is the coolest kind of engineering?', ['Biomedical', 'Aerospace', 'Chemical', 'Mechanical'], 2);
var gamingQuestion = new Question('What is the coolest video game ever?', ['Legend of Zelda', 'Super Smash Bros', 'Guitar Hero', 'Assassins Creed'], 1);
var foodQuestion = new Question('What is Charlie\'s favorite food?', ['Macaroni and Cheese', 'Beef Brisket', 'Lamb Gyros', 'Yes'], 4);

var getQuestionText = function(inQuestion) {
    var text = inQuestion.questionText + '\n';
    for ( i = 0; i < inQuestion.options.length; i++) {
        text += ( (i + 1) + '. ' + inQuestion.options[i] + '\n');
    }
    return text;
}

var questionArray = [engineeringQuestion, gamingQuestion, foodQuestion];

function getQuestion(questions) {
    return questions[Math.round(Math.random() * (questions.length - 1))];
}

console.log(getQuestionText(getQuestion(questionArray)));

var questionToDisplay = getQuestion(questionArray);
console.log(questionToDisplay.getQuestionString);