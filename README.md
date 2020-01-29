# DOM-Pig-Game 
Credits:Complete Javascript Course by Jonas Schmmedtman

 A Game played between 2 Players. Each Player has a Global Score and a Current Score. Whichever Player reaches the GLobal score of 50 first wins. Global Score is increased by adding the total Current score of every turn. Total current score is achieved by rolling the dice untill a 1 is rolled or the player chooses to Hold.

/****************
Functions , Methods, Properties , Concepts Used
*****************/
1. document.querySelector('#id')     // this querySelector Method of the document Object selects the element of the DOM having the provided id.
2. document.querySelector('#id').textContent      // this textContent Property of the element retrieved is used to read the text present in the element.
3. document.querySelector('#id').innerHtml     // this innerHTML Property is used to read html present in this element as a string.
** textContent and innerHTML can not only be used to read but to set the plain text or html inside the element respectively.
for example: document.querySelector('#current-0').textContent = dice;
document.querySelector('#current-0').innerHtml = '<em>' + dice + '<em>';


4. document.querySelector('.class').style     // style Property of the element retrieved by the querySelector('.class') with the provided class can be used to change the css for that element.
for example:
document.querySelector('.dice').style.display = 'none';

5. document.querySelector('.class').addEventListener(type , function)     // Here we use the Event Handler addEventListener Method which takes in 2 arguments, first one being the type of event it is waiting to listen and second being the function that it calls(or a written anonymous function) that performs an action.
for example
document.queryelector('.btn-roll').addEventListener('click', function (){
//Do something here
});
Refer to the following link for all kinds of events
https://developer.mozilla.org/en-US/docs/Web/Events

6. var diceDOM = document.querySelector('.dice') // Instead of selecting the same element again and again using querySelector(class/id) which slows our code we store the element object/ DOM in a variable and can use it directly to access various properties of the same
for example: diceDOM.style.display = 'block';

7. diceDOM.src   // using this we can change the src of the img element on the go/ dynamically

8. document.getElementById('id')  // This is another way of selecting an element of the DOM. This is faster than the querySelector Method. This can only be used to select elements which have got an id.
for example: document.getElementById('current-0').textContent = '0'

9. document.querySelector('.class').classList     // this classList property of the element provides the DOMTokenList which as the name implies is a list - an array like object- like strings which can be indexed and have length property but are not objects. It is a list of html classes attached to this element.Try console.log() to seeit for urself.
one can use add/ remove/toggle methods to dynamically add/remove/toggle classes
for example:
document.querySelector('.class').classList.add('active');
document.querySelector('.class').classList.remove('active');
document.querySelector('.class').classList.toggle('active');
// when toggle is used,if the class is present it is removed and if its not there it is added.

10.*******Imp****** nextPlayer()  //DRY:Do not Repeat Yourself//so as to not repeat the code//We created this to implement the functionality that happens when player is changed fo example dynamically change html class, turing roundScore to 0 and add global score.

11. Donot change css using document.querySelector('.class').style way too many times in Javascript rather try adding or removing classes using document.querySelector('.class').classList.add/remove.toggle('class')

12. gotAWinner is called a state variable that has the state of the game whether it is being played(gotAWinner = 0) or it has a winner (gotAWinner = 1)

/***********
Note: Code has comments to understand the flow.

Note: I have not created any Initialization function init as shown in the course as I found a flaw in that implementation. Rather I added an event listener for New Game Click on top of my code for the entire game coz technically the Roll Dice should not be working when the game is just opened and donot have default 0 scores. The idea just appears absurd wihout having a new game. So the entire logic of the game works if u start a new game.

************/ 




