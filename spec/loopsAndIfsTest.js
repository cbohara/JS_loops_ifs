(function() {
  'use strict';

  describe('Control Flow, Loops and Ifs', function() {

    describe('Duplicate Array', function() {

      it('should duplicate the originalArray', function() {
        expect(controlFlow.duplicateArray().length).to.equal(5);
        expect(controlFlow.duplicateArray()[0]).to.equal(100);
        expect(controlFlow.duplicateArray()[1]).to.equal(200);
        expect(controlFlow.duplicateArray()[2]).to.equal(300);
        expect(controlFlow.duplicateArray()[3]).to.equal(400);
        expect(controlFlow.duplicateArray()[4]).to.equal(500);

      });
    });

    describe('Add 100 To Values', function() {

      it('should add 100 to each value in the originalArray', function() {
        expect(controlFlow.addValues().length).to.equal(5);
        expect(controlFlow.addValues()[0]).to.equal(200);
        expect(controlFlow.addValues()[1]).to.equal(300);
        expect(controlFlow.addValues()[2]).to.equal(400);
        expect(controlFlow.addValues()[3]).to.equal(500);
        expect(controlFlow.addValues()[4]).to.equal(600);

      });
    });

    describe('Multiply Each Value by 2', function() {

      it('should multiply each value in originalArray by 2', function() {
        expect(controlFlow.multiplyValues().length).to.equal(5);
        expect(controlFlow.multiplyValues()[0]).to.equal(200);
        expect(controlFlow.multiplyValues()[1]).to.equal(400);
        expect(controlFlow.multiplyValues()[2]).to.equal(600);
        expect(controlFlow.multiplyValues()[3]).to.equal(800);
        expect(controlFlow.multiplyValues()[4]).to.equal(1000);

      });
    });

    describe('Replace Values', function() {

      it('should replace each value in copyOfOriginalArray', function() {
        expect(controlFlow.replaceValues().length).to.equal(5);
        expect(controlFlow.replaceValues()[0]).to.equal("element has been replaced");
        expect(controlFlow.replaceValues()[1]).to.equal("element has been replaced");
        expect(controlFlow.replaceValues()[2]).to.equal("element has been replaced");
        expect(controlFlow.replaceValues()[3]).to.equal("element has been replaced");
        expect(controlFlow.replaceValues()[4]).to.equal("element has been replaced");

      });
    });

    describe('Convert Object Keys to Array', function() {

      it('should add each key in object to the newArray', function() {
        expect(controlFlow.objectKeysToArray().length).to.equal(3);
        expect(controlFlow.objectKeysToArray()[0]).to.equal("city");
        expect(controlFlow.objectKeysToArray()[1]).to.equal("slingsCode");
        expect(controlFlow.objectKeysToArray()[2]).to.equal("excitementLevel");

      });
    });

    describe('Convert Object Values to Array', function() {

      it('should add each value in originalObject to newArray', function() {
        expect(controlFlow.objectValuesToArray().length).to.equal(3);
        expect(controlFlow.objectValuesToArray()[0]).to.equal("Oakland");
        expect(controlFlow.objectValuesToArray()[1]).to.equal(true);
        expect(controlFlow.objectValuesToArray()[2]).to.equal(10);

    });

    describe('Duplicate Object', function() {

      it('should return a mystical animal object literal', function() {
        expect(typeof controlFlow.duplicateObject()).to.equal("object");
        expect(controlFlow.duplicateObject()['city']).to.equal("Oakland");
        expect(controlFlow.duplicateObject()['slingsCode']).to.equal(true);
        expect(controlFlow.duplicateObject()['excitementLevel']).to.equal(10);
      });
    });

    describe('Is Number Larger than 100', function() {

      it('should check to see whether the third element in originalArray is larger than 100', function() {
        expect(controlFlow.isLargerThan100()).to.equal(true);
      });
    });

    describe('Is Number Even', function() {

      it('should check to see whether the third element in originalArray is even', function() {
        expect(controlFlow.isEven()).to.equal(true);
      });

    });

    describe('Check City', function() {

      it('should check to see whether the city property in originalArray is equal to Oakland', function() {
        expect(controlFlow.checkCity()).to.equal('I Love Oakland!');
      });

    });

    describe('Check City Again', function() {

      it('should check to see whether the city property in originalArray is equal to Oakland', function() {
        expect(controlFlow.checkCityAgain()).to.equal("which city am I in?");
      });

    });

    describe('Check if Object', function() {

      it('should check to see whether the originalObject is an Object', function() {
        expect(controlFlow.isThisAnObject()).to.equal("of course this is an object!");
      });

    });

    describe('Is Each Element Even', function() {

      it('should check to see whether each element inside of originalArray is Even', function() {
        expect(controlFlow.loopThroughIsEven()).to.equal(true);
      });

    });

    describe('Contains Excitement', function() {

      it('should check to see if the integer 10 is a value in our originalObject', function() {
        expect(controlFlow.containsExcitement()).to.equal('excitement');
      });

    });

    describe('Contains Oakland', function() {
      it('should check to see if the integer 10 is a value in our originalObject', function() {
        expect(controlFlow.containsAndAdd().length).to.equal(2);
        expect(controlFlow.containsAndAdd()[0]).to.equal('city');
        expect(controlFlow.containsAndAdd()[1]).to.equal('Oakland');
      });
    });


 })
});

}());
