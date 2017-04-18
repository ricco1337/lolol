//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

//Answer
//    To build contrustor functions.
//The this reference always refers to an object- a singular object - and it is usually used inside a function or a method
// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//Answer
// left of invoke,
// 1.  Function invocation - when you invoke a function declaration or a functiojn expression the this keyword will be bound to the global object, which in the browser is the window object.
// 2.  Method Invocation [ Implicit Binding]- When you invoke a method the this value will be bound to that object.
// 3.  Explicit binding- We can explicity set what th this keyword will be bound to using one of the following, .call, .apply, .bound.
// 4.  Constructor binding-[New binding]- When a function invocation is proceeded by the new keyword this will be bound to the newly created object.
// 3) What is the difference between call and apply?

//Answer
//    .call() will invoke the the function that is called upon, allowing us to pas in an argument that this will be bound to.
//    .apply() you can write a method once & then inherit it in another object, without having to rewrite the method for the new object.
//    with apply, you can use an array literal, or an array object.
// the array notation in apply
// 4) What does .bind do?

//Answer
// allows you to pass new parameter in to exsiting functions.
//.bind- hard bidding. .bind does not invoke the function instead it returns it, to be later invoked.

//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here
var user = {
  username: "NDMueller",
  email: "nicholas.mueller@gmail.com",
  getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername())

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move = this.move + 10;
    return this.move
  }
}
//Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function() {
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
//Code Here

getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
  return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
//Answer Here

//"iliketurtles"

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

//Answer Here
//the username key in myUser

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

getMyUsername.call(myUser) //We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

//Answer

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//Answer

// 3) What is the difference between call and apply?

//Answer

// 4) What does .bind do?

//Answer


//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

//Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function() {
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
//Code Here


//New Problem

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
  return this.username;
};

var userName = myUser.username; //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
//Answer Here

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

//Answer Here


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
Contact GitHub API Training Shop Blog About
