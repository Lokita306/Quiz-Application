// Questions will be asked
const Questions = [{
    id: 0,
    q: "1. Who invented Java Programming?",
    a: [{ text: " Guido van Rossum ", isCorrect: false },
        { text: "Bjarne Stroustrup", isCorrect: false },
        { text: "James Gosling", isCorrect: true },
        { text: "Dennis Ritchie", isCorrect: false }
    ]

},  
{
    id: 1,
    q: "2. Which statement is true about Java?",
    a: [{ text: "sequence-dependent programming language", isCorrect: false },
        { text: "code dependent programming language", isCorrect: false },
        { text: "platform-dependent programming language", isCorrect: false },
        { text: "platform-independent programming language", isCorrect: true }
    ]

},
{
    id: 2,
    q: "3. Which component is used to compile, debug and execute the java programs?",
    a: [{ text: "JRE", isCorrect: false },
        { text: "JIT", isCorrect: false },
        { text: "JDK", isCorrect: true },
        { text: "JVM", isCorrect: false }
    ]
},
{
    id: 3,
    q: "4. Which one of the following is not a Java feature?",
    a: [{ text: "Object-oriented", isCorrect: false },
        { text: "Use of pointers", isCorrect: true },
        { text: "Portable", isCorrect: false },
        { text: "Dynamic and Extensible", isCorrect: false }
    ]
},
{
    id: 4,
    q: "5. What is the extension of java code files?",
    a: [{ text: ".js", isCorrect: false },
        { text: ".txt", isCorrect: false},
        { text: ".class", isCorrect: false },
        { text: ".java", isCorrect: true }
    ]
},
{
    id: 5,
    q: "6. Which environment variable is used to set the java path?",
    a: [{ text: "MAVEN_Path", isCorrect: false },
        { text: "JavaPATH", isCorrect: false },
        { text: "JAVA", isCorrect: false },
        { text: "JAVA_HOME", isCorrect: true }
    ]
},
{
    id: 6,
    q: "7. Which of the following is not an OOPS concept in Java?",
    a: [{ text: "Polymorphism", isCorrect: false },
        { text: "Inheritance", isCorrect: false },
        { text: "Compilation", isCorrect: true },
        { text: " Encapsulation", isCorrect: false }
    ]
},
{
    id: 7,
    q: "8. Which of these keywords is used to define interfaces in Java?",
    a: [{ text: "intf", isCorrect: false },
        { text: "Intf", isCorrect: false },
        { text: "interface", isCorrect: true },
        { text: "Interface", isCorrect: false }
    ]
},
{
    id: 8,
    q: "9. Which of the following is a superclass of every class in Java?",
    a: [{ text: "ArrayList", isCorrect: false },
        { text: "Object class", isCorrect: true },
        { text: "Abstract class", isCorrect: false },
        { text: "String", isCorrect: false }
    ]
},
{
    id: 9,
    q: "10. Which of these packages contains the exception Stack Overflow in Java?",
    a: [{ text: "java.io", isCorrect: false },
        { text: "java.lang", isCorrect: true },
        { text: "java.system", isCorrect: false },
        { text: "java.util", isCorrect: false }
    ]
}
]

// Set start variable
var start = true;

// Iterate function
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
}

})