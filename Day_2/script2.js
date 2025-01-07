/*
//                                              TIMEOUT FUNCTION

const sayhello=()=>{
 setTimeout(() => {
    console.log("Hello")
 }, 5000);
}

const saybye=()=>{
    console.log("Bye..")
}

sayhello();
saybye();  
// here 1st 'Bye' will be displayed then after 5 sec 'Hello' will be displayed bcz, we have given as '5000' in timeout function





//                                      SETINTERVAL & CLEARINTERVAL FUNCTION


const interval1 = setInterval(()=>{
    console.log("Hello world..")

},3000)  // here 'Hello world' will be printed in 3 sec delay


let i=0
const interval = setInterval(()=>{
    console.log("Hello world..")
    i++

},3000)
if(i==3)
    clearInterval(interval)   
//here if i=3 then running will be terminated



//                                                  PROMISE - RESOLVE/REJECT
//                                  - traditional way of solving asynchronous javascript
let taketicket = new Promise((resolve,reject)=>{  // can use 'reject' also in place of 'resolve'
    if(true){
        resolve("yes booked");
    }
    else{
        reject("not yet");
    }

})
taketicket.then((e)=>{
    console.log(e);
}).catch((err)=>{
    console.log(err);     // yes booked , bcz we have given as true
})




//Promise.all - Succeeds only if all promises succeed; fails if any promise fails.
let taketicket1 = new Promise((resolve, reject) => {
    if (true) {
        resolve("yes booked - ticket 1");
    } else {
        reject("not yet - ticket 1");
    }
});

let taketicket2 = new Promise((resolve, reject) => {
    if (false) {
        resolve("yes booked - ticket 2");
    } else {
        reject("not yet - ticket 2");
    }
});

Promise.all([taketicket1, taketicket2])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.log("One or more promises rejected:", error);
    });



//promise.settled - Waits for all promises and shows both success and failure results.
let taketicket3 = new Promise((resolve, reject) => {
    if (true) {
        resolve("yes booked - ticket 1");
    } else {
        reject("not yet - ticket 1");
    }
});

let taketicket4 = new Promise((resolve, reject) => {
    if (false) {
        resolve("yes booked - ticket 2");
    } else {
        reject("not yet - ticket 2");
    }
});

Promise.allSettled([taketicket3, taketicket4])
    .then((results) => {
        console.log("AllSettled results:");
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} resolved:`, result.value);
            } else {
                console.log(`Promise ${index + 1} rejected:`, result.reason);
            }
        });
    });


//                                               ASYNC & AWAITS
//            - async: Makes a function return a promise , await: Waits for a promise to resolve.
//            - Used for: Simplifying asynchronous code.

//normal
const data = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1');   //referd - https://jsonplaceholder.typicode.com/
    return response; // Returns the promise
};

data()
    .then((e) => {
        console.log(e); // Logs the response object
        return e.json(); // Returns a promise for the JSON data
    })
    .then((jsonData) => {
        console.log(jsonData); // Logs the parsed JSON data
    })
    .catch((e) => {
        console.log(e); // Logs errors
    });



    //using awaits and async
const data1 = async () => {  // Add 'async' to handle promises
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');  // Use 'await' for fetch
    return response;
};

data1()
    .then(async (e) => {
        console.log(e); // Logs the response object
        const jsonData = await e.json(); // Await the JSON parsing
        console.log(jsonData); // Logs the parsed JSON data
    })
    .catch((e) => {
        console.log(e); // Logs errors
    });
    
    





//NOTE  - EVERY THING IN JS IS 'CAMEL CASE'

//getElementByid
//getElementByClassName
//getElementsByTagName
//querySelector
//querySelectorAll

let h1 = document.getElementById("tag1");  
console.log(h1);

//                                                              TEXT MANIPULATION

h1.innerHTML = "hello hii.."    //to remove tag usage in html
h1.innerText = "hello.."       //extract text
h1.textContent = "hey hello.."
console.log(h1.textContent);
//location.assign("day2work.com");
// console.log(screen.orientation);
// history



//alternate for <div> in html 
let div = document.createElement("div")
//div.innerText= "div created using js" //- not good way to this
let t = document.createTextNode("div created using js")
//div.className="divcls"    //from style2.css , - used for single class
div.classList="divcls"  //used for multiple classes 
div.append(t)
console.log(div);


let body = document.getElementById("data")
body.append(div)



let l = document.getElementsByClassName("one")
console.log(l)     // return all the elemets in class one (html)


//to access 1st link -  we use index
let l1 = document.getElementsByClassName("one")[0]
console.log(l1) // one

let l2 = document.getElementsByClassName("one")[4]
console.log(l2) //five




//to access element by tag name  - i.e <h1>,<div>,<body>
let l3 = document.getElementsByTagName("li")
console.log(l3)  // return all the elemets in tag li

//to access single element
let l4 = document.getElementsByTagName("li")[1]
console.log(l4)  // o/p - two





// query selector
let l5 = document.querySelector("ul li") //used to pick up 1st occurence it passes
console.log(l5)  // o/p - one

let l6 = document.querySelectorAll("ul li") //used to pick up all possibe occurence it passes
console.log(l6)  // o/p - all elements in ul li 






//                                                   TASK -1
//           create id for body , accept element using elementbyid , append the element and return the output

//to create list
let b1 = document.getElementById("data")   //b1 - body , data - id for body
let ul = document.createElement("ul")     //to create element
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")
let li5 = document.createElement("li")
ul.append(li1,li2,li3,li4,li5)
console.log(ul);

//to create items text
let t1 = document.createTextNode("onion")
let t2 = document.createTextNode("tomato")
let t3 = document.createTextNode("spices")
let t4 = document.createTextNode("gingergarlic paste")
let t5 = document.createTextNode("curry leaf")

//to connect the list and items
li1.append(t1)  
li2.append(t2)
li3.append(t3)
li4.append(t4)
li5.append(t5)

console.log(ul)
b1.append(ul)   // to display in screen
ul.className="divcls"  // from style2.css

ul.setAttribute("id","tag")

//                                            way to style in js
ul.style.color="olive"   
ul.style.backgroundColor="pink"  
ul.style.cssText="color:brown"





//                                                     TASK - 2
//                                   -create list inside another unordered list

let li6 = document.createElement("li");
let li7 = document.createElement("li");
let li8 = document.createElement("li");

// Create text nodes for the nested list items
let t6 = document.createTextNode("turmeric");
let t7 = document.createTextNode("chilli");
let t8 = document.createTextNode("asafotida");

// Append the text to the list items
li6.append(t6);
li7.append(t7);
li8.append(t8);

// Append these new list items directly to li3 (the 'spices' list item)
li3.append(li6);
li3.append(li7);
li3.append(li8);

console.log(ul);




//                                                  LIST USING ARRAY
let b2 = document.getElementById("data") 
let f = ['apple','orange','pine','mango']
let ul = document.createElement("ul")
f.map((i)=>{
    let li = document.createElement("li")
    let tn = document.createTextNode(i)
    li.append(tn)
    ul.append(li)
})
b2.append(ul)
console.log(ul)



let b3 = document.getElementById("data")
b3.children[2].remove();    //here created ul in html , here we have deleted 2nd created ul which index is 2

// let li = document.getElementById("one")
// li.remove()


// //prepand() - in JavaScript adds one or more elements to the beginning of a specified parent element.
// let div = document.createElement("div");
// div.innerText = "First Element";
// document.body.prepend(div);  // Adds 'div' at the beginning of the body





//                                                 DATE FUNCTION

let date = new Date()
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getSeconds());
console.log(date.getDay());

*/


// NOTE - WEBSITE -> FIGMA , SPINE  - to develop web



/*
//                                                EXCEPTION HANDLING
// syntax :- 
// try{


// }catch(error){

// }

// event - every action is handled as event , action made by user is called as event



let button1 = document.getElementById("button")
button1.addEventListener("click",()=>{                               // ()=> call back
alert("you have clicked the button")   //once clicked msg will be displayed
})


let button = document.getElementById("button"); 
button.addEventListener("dblclick", () => {    // Use "dblclick" for double-click events
    alert("You have clicked the button");      // Display message on double-click
});




// //bubbling - event starts at a child element and moves up to its parent.
// let parent = document.getElementsByClassName("div1")[0]
// parent.addEventListener("click",()=>{
//     alert("you clicked parent")
// })
// child1.addEventListener("click",()=>{
//     alert("you clicked child1")
// })
// child2.addEventListener("click",()=>{
//     alert("you clicked child2")
// })  //what ever you click here i shows like 'you clicked parent' bcz event bubbling moves to its parent from child  



//stop bubbling
let parent1 = document.getElementsByClassName("div1")[0];
let child11 = document.getElementsByClassName("div2")[0];
let child12 = document.getElementsByClassName("div3")[0];

parent1.addEventListener("click", () => {
    alert("you clicked parent");
});
child11.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("you clicked child1");
});
child12.addEventListener("click", (e) => {
    e.stopPropagation(); //method used to stop bubbling
    alert("you clicked child2");
});




const event1=(e)=>{
    alert("you clicked child2")
    console.log(e.target.tagName)  // target - specifies the division which is clicked , tagName - specifies the tag name of clicked element | here we can use (e) - display many tags in form of array , (e.target) - displays like 'child2' , (e.target.tagName) - displays as 'DIV' here
    remove();
}
child12.addEventListener("click",event1)

const remove=()=>{
    child12.removeEventListener("click",event1)
}    // It removes the click event listener from child12 after it is clicked once. The event triggers an alert and then the listener is removed.


*/

//                                                           MOUSE EVENT
//                                         -mouseUp event, mouseenter event,mouseleave event
// mouseup: Triggered when the mouse button is released. 
// mouseenter: Triggered when the mouse pointer enters an element.
// mouseleave: Triggered when the mouse pointer leaves an element.


// const box = document.getElementById("box");
// box.addEventListener("mouseup", () => alert("Mouse button released"));
// box.addEventListener("mouseenter", () => alert("Mouse entered"));
// box.addEventListener("mouseleave", () => alert("Mouse left"));


const catchkeyboard=(e)=>{
    console.log(e.key);
}
window.addEventListener("keydownn",catchkeyboard)  //If you press the "a" key in keyboard, it will print a in the console. Similarly, pressing the "Enter" key will print Enter.


const catchkeyboard2=(e)=>{
    console.log(e.key);
}
window.addEventListener("keyup",catchkeyboard2)   //If you press and then release the "a" key, it will print a in the console.


const catchkeyboard3=(e)=>{
    console.log(e.key);
}
window.addEventListener("keypress",catchkeyboard3)  //When a key is pressed, it will print that key to the console.



// to prevent info
const catchkeyboard4=(e)=>{
    e.preventDefault()      // method used here
    console.log(e.key);
}
window.addEventListener("keyup",catchkeyboard4)   //If you press and then release the "a" key, it will print a in the console.




