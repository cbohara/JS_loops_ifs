(function() {
  'use strict';

  window.controlFlow = {};

//* Getting Started..

// We've created an array and an object for you to practice with below. 
  var originalArray = [100,200,300,400,500];
  var originalObject = {
    city: 'Oakland',
    slingsCode: true,
    excitementLevel: 10
  };

// Arrays


// duplicateArray iterates through our originalArray and transfers the values to our newArray to our newArray. Follow the directions below to complete the challenge.
controlFlow.duplicateArray = function(){
  var newArray = [];
  // 1. create a for loop below to go through the originalArray created on line 9
  // 2. push each element inside of arr inside of the newArray.
  // 3. return newArray
   for(var i = 0; i < originalArray.length; i++){
    newArray.push(originalArray[i]);
  }
  return newArray;
};

// addValues iterates through our originalArray, adds 100 to each, and adds them to our newArray. Follow the directions below to complete the challenge.
controlFlow.addValues = function(){
  // 1. create a for loop below to iterate through the originalArray created on line 9
    // 2. create a variable called valuePlusOneHundred and assign it to the current value + 100 
    // 3. without using push, add each element to the newArray. *TIP* --> how do you add a value to the end of an array without using push? 
  // 4. return newArray
  var newArray = [];
  for(var i = 0; i < originalArray.length; i++){
    var valuePlusOneHundred = originalArray[i] + 100;
    newArray[i] = valuePlusOneHundred;
  }
  return newArray;
};


// multiplyValues iterates through our originalArray, multiplies each value by 2, and adds them to our newArray. Follow the directions below to complete the challenge.
controlFlow.multiplyValues = function(){

  // 1. finish the for loop below to iterate through the originalArray created on line 9
    // 2. create a variable, multipliedByTwo and assign it to the the current value times 2 
    // 3. push each element inside to the newArray.
  // 4. return newArray
  var newArray = [];
  for(var i = 0; i < originalArray.length; i++){
    var multipliedByTwo = originalArray[i] * 2;
    newArray.push(multipliedByTwo);
  }
  return newArray;
};

////DOES THIS WORK??///////
// replaceValues iterates through the copyOfOriginalArray and REPLACES each value with 
controlFlow.replaceValues = function(){
  // *DONT TOUCH* this creates a clean copy of an array look up array.slice() for more details
  var copyOfOriginalArray = originalArray.slice();
  // 1. create a for loop and iterate trhough copyOfOriginalArray
  // 2. inside the for loop, replace each element with the string "element has been replaced"
  // 3. return copyofOriginalArray
  for(var i = 0; i < copyofOriginalArray.length; i++){
    copyofOriginalArray[i] = 'element has been replaced';
  }
  return copyofOriginalArray;
};


controlFlow.objectKeysToArray = function(){

  // 1. create a for in loop below to go through the originalObject
    // 2. add each key to the newArray
  // 3. return newArray
  var newArray = [];
  for(var key in originalObject){
    newArray.push(key);
  }
  return newArray;
};

//testing 
/*
  var originalObject = {
    city: 'Oakland',
    slingsCode: true,
    excitementLevel: 10
  };
  for (var key in originalObject) {
      newArray.push = key;
  }
console.log(newArray);
*/


controlFlow.objectValuesToArray = function(){

  // 1. create a for in loop below to go through the originalObject
  // 2. add each value to the newArray
  // 3. return newArray
  var newArray = [];
  for(var key in originalObject){
    newArray.push(originalObject[key]);
  }
  return newArray;
}
//answer resembles:
/*
for( var key in obj ) {
  var value = obj[key];
  console.log(value);
}
*/
///////DOES THIS WORK?????/////////////
controlFlow.duplicateObject = function(){
  // 1. iterate through originalObject
  // 2. add each key AND its corresponding value to newObject 
  // 3. return newObject
  var newObject = {};
  for(var key in originalObject){
    newObject.key = originalObject[key];
  }
  return newObject;
};


//========= Let's level up a bit by incorporating conditionals ====

controlFlow.isLargerThan100 = function(){
  var state;
  // 1. create an if statement and have it whether the 3rd element in originalArray is larger than 100
    // 2. in the if block assign state to true
    // 3. else, assign state to false
  // 4. return state
  if(originalArray[3] > 100){
    state = true;
  }
  else 
    state = false;
  return state;
};

controlFlow.isEven = function(){
  var state;
  //1. create an if statement and have it check whether the third element in originalArray is even.
      // TIP: go online and check out the '%' operator which should help you create your condition
  // 2. in the if block assign state to true
  // 3. else, assign state to false
  // 4. return state
  if(originalArray[3]%2 === 0)
    state = true;
  else
      state = false;
  return state;
};


controlFlow.checkCity = function(){
  //1. create an if statement and have it check whether the city in originalObject is equal to Oakland
  // LESSON: you'll notice that we haven't created a 'state' variable for you. We now want you to get used to using return statements yourself. If you return inside of an 'if', it returns that value. You can also return inside of an 'else'. Each will ONLY return if condition is met.
    // 2: if the condition passes, return 'I love Oakland!'
    // 3: else, return "which city am I in?"
    if(originalObject.city === 'Oakland')
      return 'I Love Oakland!';
    else
      return 'which city am I in?';
};

controlFlow.checkCityAgain = function(){
  // copy & paste your code from above and us the negation operator to change the condition to pass to the else statement.
  if(!originalObject.city === 'Oakland')
      return 'I Love Oakland!';
    else
      return 'which city am I in?';
};


controlFlow.isThisAnObject = function(){
  // 1. create a conditional that checks to see whether originalObject is an object.
      // TIP: there are a couple of ways to check whether something is an object, use the internetz to figure out the best way to do this
      // if it is an object, return 'of course this is an object!'
      // else, return false
      if(typeof originalObject === 'object')
        return 'of course this is an object!';
      else
        return false;
};


// ============= let's up the anti a bit and add in some loops with our conditonals ==================================================

// loopThroughIsEven is 
controlFlow.loopThroughIsEven = function(){
  var state = true;
  // 1. Loop through the originalArray
  // 2. check to see if each item is even
  // 3. if an item is not even, change state to false.
  // 4. return state;
  for(var i = 0; i < originalArray.length; i++){
    if(originalArray[i]%2 === 0)
      state = true;
    else
      state = false;
    return state;
  }
};


controlFlow.containsExcitement = function(){
  var state = false;
  // 1. loop through the originalObject
  // 2. check see if ANY of the properties have a corresponding value of 10
  // 3. if the condition passes, return the corresponding key
  // 4. you do not need an else statement
  for(var key in originalObject){
    if(originalObject[key] === 10)
      return key;
  }
};


controlFlow.containsAndAdd = function(){
  var result = [];
  // 1. loop through the originalObject
  // 2. check to see if ANY of the properties have a corresponding value starting with the letter 'O'. (look this up, strings are indexed as well)
  // 3. if the condition passes: 
      // 3a. push the KEY to the results array
      // 4a. push the correspdoning value to the results array
  // 4. return the result array
  for(var key in originalObject){
    var x = originalObject[key];
    if(x.charAt(0)=== 'O'){
      result.push(key);
      result.push(originalObject[key]);
    }
    return result;
  }
};

}());



