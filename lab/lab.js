/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript and DOM Manipulation 
   FE Lab Week 10
*/

/* ----------------------------------------------------- */
// Key Term List:

// DOM (Document Object Model): represents the structure of a web document


// Element/node: represents html elements like div, p or table 

// CSS Selector (class/id/node): the first part of a css rule that tells the browser which html elements are having the css aplied to them

// Event Listener: waits for an event like a click or a hover and then responds when it occurs

//.createElement: allows you to create new html elements using js

//.getElementBy___: allows you to access an html element by using an attribute

//.querySelector: allows you to select the first element in a document that matches a specified css selector

//.append: adds an element to the end of a selected parent element

//.prepend: adds an element to the beginning of a selected parent element

// element.style.____ = '': allows you to manipulate inline styles of an html element using javaScript

// .innerHTML = 'Hello World': allows you to get or set html content within that element
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*------------------------ Creating a website with only JS ------------------------*/
console.log(`-------------------------- 
    Part 1: Create a form with only JavaScript`)
    
    /** 
     *
     * Step 1: Uncomment out the 'console.log(myForm)' at the bottom of the section.
     * Step 2: Using let, make a new variable called 'myForm'.
     * Step 3: Set it to be equal to document.createElement('form') // check the result in the console.
     * Step 4: Repeat steps 2 and 3, but with: myLabel, myInput . This input will be used to enter a name.
     * Step 5: Set the .innerHTML of myLabel to be equal to 'Name'
     * Step 6: Append myLabel to myForm, then append myInput to myForm
     * Step 7: Append myForm to document.body
               You should now have a label and a input on your website.
               Do the same steps, appending a label/input for Email, and a submit button to your form.
     * ↓ YOUR CODE HERE ↓ */
    
let myForm = document.createElement('form');
let myLabel = document.createElement("label");
let myInput = document.createElement("input");
myLabel.innerHTML = 'Name';
myForm.appendChild(myLabel);
myForm.appendChild(myInput);
document.body.appendChild(myForm);
let emailLabel = document.createElement("label");
let emailInput = document.createElement("input");
emailLabel.innerHTML = 'Email';
myForm.appendChild(emailLabel);
myForm.appendChild(emailInput);
let submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
myForm.appendChild(submitButton);

     console.log(myForm)
    //Question: Besides changing the innerHTML, what other HTML things can we change using JavaScript?
    //Answer: you can do anything from image manipulation, form validation and dynamic changes of content just to name some of the most common uses
    
    /*------------------------ Styling a form with only JavaScript------------------------*/
    console.log(`-------------------------- 
    Part 2: Styling our form with only JavaScript`)
    
    /**
     *  Hint: element.style.cssProperty = ''
     *
     *  Step 1: Change the background color of your form to your favorite color.
     *         (you can use an accepted string, hex (ex: #DBF9FC) or rgb, (ex: rgb(255,122,89)))
     *  Step 2: Change the font color so it's readable over your background color
     *  Step 3: Give your form a display of flex, a flex-direction of column, and a max-width of 250px
     *
     * ↓ YOUR CODE HERE ↓ */
       myForm.style.backgroundColor = "teal"
       myForm.style.color = "black"
       myForm.style.display = "flex"
       myForm.style.flexDirection = "column"
       myForm.style.maxWidth = "250px"


    
    //Question: Do you prefer styling with JavaScript or CSS?
    //Answer: i think css because its a little more intuitive at this point in my understanding but i see how it might be better since you wouldnt have to have a css file
    
    /*------------------------ Creating a table with only JavaScript ------------------------*/
    console.log(`-------------------------- 
    Part 3: Creating a table with only JavaScript`)
    
    /*
     * Note: Most of these steps are similar to Part 1.
    
     * Step 1: Uncomment out the console.log(myTable) below.       
     * Step 2: Create 4 new table elements: <table>, <tr>, <td>, <td>. Store them in variables using let
     * Step 3: One of your TD elements innerHTML should be 'Name', the other should be 'Email'.
     * Step 4: Append them in the same way that we create a table with HTML.
     * Step 5: Append the finished <table> to your <body>. It should now be on your website. 
              As an added challenge, try to create a complete table with 2 rows, name/email and append it to the body.
    
     * Final Step: Style your table using JavaScript starting with a border. You may need to target more element/nodes than we did with myTable.
     * ↓ YOUR CODE HERE ↓ */
    
let table = document.createElement("table");
let tr1 = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")
td1.innerHTML = "Name"
td2.innerHTML = "Email"
tr1.appendChild(td1)
tr1.appendChild(td2)
table.appendChild(tr1)
document.body.appendChild(table)
let tr2 = document.createElement("tr")
let td3 = document.createElement("td")
let td4 = document.createElement("td")
td3.innerHTML = "Your Name"
td4.innerHTML = "YourEmail@Gmail.com"
tr2.appendChild(td3)
tr2.appendChild(td4)
table.appendChild(tr2)

table.style.border = "5px solid black"
table.style.borderCollapse = "collapse"
tr1.style.border = "3px solid green"
tr2.style.border = "3px solid blue"
td1.style.border = "3px solid green"
td2.style.border = "3px solid purple"
td3.style.border = "3px solid red"
td4.style.border = "3px solid pink"
    console.log(table)
    //Question: While this is clearly a more round-about way of making a table, how can using JavaScript in this way
    //          more beneficial than HTML?
    //Answer:
    //  html tables are good if you're not dealing with a lot of data that isn't going to change. javascript tables however, are better on mobile devices and are able to be made to be dynamic so you can do more with them 
    
    /*------------------------ Changing our body background on click ------------------------*/
    console.log(`-------------------------- 
    Part 4: Changing our background on click`)
    /**
     * Documentation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
     *
     * Step 1: In our HTML, uncomment out the <button> element.
     * Step 2: Read through the documentation up through the first block of code.
     *         We're going to use rgb (ex: rgb(0,125,255) ) to change the color of our body's background when we click the button
     * Step 3: Create a variable called myButton that uses getElementById() to target the button in step 1.
     * Step 4: Use the 'addEventListener' method on myButton.
     *         addEventListener is a method takes in two arguments: an event listener type, and a function.
     * Step 5: For the first argument, add 'click'. For the second argument, add a function body... (ex: function (){})
     * Step 6: Inside of the function body, change the backgroundColor of our body element.
     *         Let's use rgb(0,125,255) to change the color, and Math.random() to change the values inside rgb().
     * Step 7: Click the button in your index.html and see the background change!
     *
     * ↓ YOUR CODE HERE ↓ */
    
    const myButton = document.getElementById("myButton");
    
    function random(number) {
      return Math.floor(Math.random() * (number + 1));
    }

    myButton.addEventListener("click", () => {
      const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
      document.body.style.backgroundColor = randomColor;
      });
   
    
    //Question: What other event listeners are there?
    //             Try them out by replacing 'click' in your function above!
    //Answer:
    
    console.log(`-----------Finished------------`)
    
    /**
     * Extra Project Ideas:
     *
     * 1: Create a button that changes the innerHTML of a div back and forth from 'Hello' to 'World'
     * 2: Create an image that disappears when you hover over it, and reappears when you hover off.
     * 3: When you click your form button, get the input values of your name/email input,
     *    and append a new <tr> containing those values to your tBody element.
     *    Look into event.preventDefault(). Buttons inside of forms have a default setting to refresh the page.
     */