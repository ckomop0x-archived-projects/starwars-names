import {expect} from 'chai'
import starWars from './index'


describe('Star Wars Names', function() {
  describe('all', function() {
    it('It should be an array of strings',  function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string'
        })
      }
    });

    it('It should contain Luke Skywalker',  function() {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('should return a random item from the starWars.all', function() {
      var randomItem = starWars.random();

      expect(starWars.all).to.include(randomItem);
    });

    it('should return array of random items if passed a number', function() {
      var randomItems = starWars.random(3);

      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(randomItem) {
        expect(starWars.all).to.include(randomItem);
      })
    });
  });
});
