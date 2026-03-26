
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer: getElementById is working on single or unique content on html, and it return single value, so thar we can change it innertext.
on the other hand, getElementByClassName working on multiple html content which are given same class name, it return arry like node or string, it is very usefull to working on collection contents like card or list.
qurySelector and querySelectorAll are perform like getElementById and getElementByClassName respectively.. these two DOM property used html tag name.
-------------------------------------------------------------------
2. How do you create and insert a new element into the DOM?
answer: document.createElement("div");
div.innetText("Hello WOrld");
// getting parent Element
const parent = document.getElementById("card-container");
// insert to the parent
parent.appendChild(div);
----------------------------------------------------------------------
3. What is Event Bubbling? And how does it work?
answer : Event Bubbling means when an event happens it goes down to up, like from child to parent to grandparent to body to document.
-------------------------------------------------------------------------
4. What is Event Delegation in JavaScript? Why is it useful?
answer: Event Delegation is where an event listener add to a parent element instead of so many child elements.Because of event bubbling, the parent can catch the element from child.
it is usefull because ,, less code, better performance, dynamic work and easy to manage event.
----------------------------------------------------------------------------
5. What is the difference between preventDefault() and stopPropagation() methods?
answer : preventDafult() will stops the default behavior of an element. it means it will stop browder default action.
stopPropagation() is used for stop event bubbling..it stops event from going to parent..