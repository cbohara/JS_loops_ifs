(function() {
  'use strict';

  describe('Functions Tests', function() {

    describe('Create Subtract Function', function() {

      it('it should be a function', function() {
        expect(typeof functions.subtract).to.equal('function');
      });

      it('it should return the correct number', function() {
        expect(functions.subtract(6, 3)).to.equal(3);
      });
    });
    
    describe('Create Modulo Function', function() {

      it('it should be a function', function() {
        expect(typeof functions.modulo).to.equal('function');      
      });

      it('it should return the correct number', function() {
        expect(functions.modulo(10, 4)).to.equal(2);
      });
    });

    describe('Create Multiply Function', function() {

      it('it should be a function', function() {
        expect(typeof functions.multiply).to.equal('function');      
      });

      it('it should return the correct number', function() {
        expect(functions.multiply(10, 4)).to.equal(40);
      });
    });
    describe("Create I'm Here Function", function() {

     it('it should be a function', function() {
        expect(typeof functions.imHere).to.equal('function');      
      });

     it('should return each student in the students array', function() {
        expect(functions.imHere().length).to.equal(5);
        expect(functions.imHere()[0]).to.equal('jonathan');
        expect(functions.imHere()[1]).to.equal('jeff');
        expect(functions.imHere()[2]).to.equal('charlie');
        expect(functions.imHere()[3]).to.equal('charles');
        expect(functions.imHere()[4]).to.equal('levio');

      });
    });

    describe("Create Places I've Been Function", function() {

      it('it should be a function', function() {
        expect(typeof functions.placesIveBeen).to.equal('function');      
      });

     it('should return each student in the students array', function() {
        expect(functions.placesIveBeen().length).to.equal(4);
        expect(functions.placesIveBeen()[0]).to.equal('19th street');
        expect(functions.placesIveBeen()[1]).to.equal('10th street');
        expect(functions.placesIveBeen()[2]).to.equal('14th street');
        expect(functions.placesIveBeen()[3]).to.equal('diamond district');
      });
    });
    describe('Create Find Levio Function', function() {

      it('it should be a function', function() {
        expect(typeof functions.findLevio).to.equal('function');      
      });

      it('it should return the correct value', function() {
        expect(functions.findLevio()).to.equal('levio');
      });      
    });

    describe("Create Dude Where's My Car Function", function() {

      it('it should be a function', function() {
        expect(typeof functions.dudeWheresMyCar).to.equal('function');      
      });

      it('it should return a string', function() {
        expect(typeof functions.dudeWheresMyCar()).to.equal('string');      
      });

      it('it should return the correct string', function() {
        expect(functions.dudeWheresMyCar('Albrey', 'Berkeley')).to.equal('Albrey left the car in Berkeley');      
      });
    });

    describe('Invoke Dude Wheres My Car Function', function() {

      it('it should return the correct string', function() {
        expect(functions.invokeDudeWheresMyCar()).to.equal('Shanna left the car in California');      
      });
    });

    describe('Invoke Modulo Function', function() {

      it('it should return the correct number', function() {
        expect(functions.invokeModulo()).to.equal(3);      
      });
    });

    describe('Invoke Multiply Function', function() {

      it('it should return the correct number', function() {
        expect(functions.invokeMultiply()).to.equal(1075);      
      });
    });

     describe('Invoke Subtract Function', function() {

      it('it should return the correct number', function() {
        expect(functions.invokeSubtract()).to.equal(166);      
      });
    });

  });

}());
