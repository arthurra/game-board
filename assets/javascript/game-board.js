// Resource tiles
// 4 wood, 4 sheep, 3 brick, 3 wheat, 3 ore, 1 desert

'use strict';

window.onload = function () {

  // Resource types
  var resourceTypes = ['wood', 'sheep', 'brick', 'wheat', 'ore', 'desert'];

  // Amount of each resource
  var woodAmount = 4;
  var sheepAmount = 4;
  var wheatAmount = 4;
  var brickAmount = 3;
  var oreAmount = 3;
  var desertAmount = 1;

  // Resources object
  var resourceTiles = {
    wood: { amount: woodAmount },
    sheep: { amount: sheepAmount },
    wheat: { amount: wheatAmount },
    brick: { amount: brickAmount },
    ore: { amount: oreAmount },
    desert: { amount: desertAmount }
  };

  // Return a node list of the svg elements
  var tiles = document.querySelectorAll('.tile');

  // Array of available resources
  var availableResources = [];

  // Build a list of available resources
  var updateAvalaibleResources = function updateAvalaibleResources() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(resourceTiles)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        if (resourceTiles[key].amount > 0) {
          availableResources.push('' + key);
        } else if (resourceTiles[key].amount == 0) {
          var emptyResource = availableResources.indexOf('' + key);
          if (emptyResource != -1) {
            availableResources.splice(emptyResource, 1);
          };
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };updateAvalaibleResources();

  // Loop over the tiles and add resource name
  var addRandomResource = function addRandomResource() {
    tiles.forEach(function (tile) {

      var randomResourceName = availableResources[Math.floor(Math.random() * availableResources.length)];

      tile.classList += " " + "tile--" + randomResourceName;
      resourceTiles[randomResourceName].amount--;

      console.log(tile.id + " " + "is" + " " + tile.classList);
      console.log(randomResourceName + " tiles left = " + resourceTiles[randomResourceName].amount);

      // Drop the current list of available resources
      availableResources = [];

      // Rebuild the current list of available resources
      updateAvalaibleResources();
    });
  };addRandomResource();

  // Amount of each number
  var twoAmount = 1;
  var threeAmount = 2;
  var fourAmount = 2;
  var fiveAmount = 2;
  var sixAmount = 2;
  // skip seven
  var eightAmount = 2;
  var nineAmount = 2;
  var tenAmount = 2;
  var elevenAmount = 2;
  var twelveAmount = 1;

  // Number object
  var tileNumbers = {
    2: { amount: twoAmount },
    3: { amount: threeAmount },
    4: { amount: fourAmount },
    5: { amount: fiveAmount },
    6: { amount: sixAmount },
    // skip seven
    8: { amount: eightAmount },
    9: { amount: nineAmount },
    10: { amount: tenAmount },
    11: { amount: elevenAmount },
    12: { amount: twelveAmount }
  };

  // Return a node list of the svg elements
  var numbers = document.querySelectorAll('.tile:not(.tile--desert) ~ .number');

  // Array of available resources
  var availableNumbers = [];

  // Build a list of available resources
  var updateAvalaibleNumbers = function updateAvalaibleNumbers() {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = Object.keys(tileNumbers)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;

        if (tileNumbers[key].amount > 0) {
          availableNumbers.push('' + key);
        } else if (tileNumbers[key].amount == 0) {
          var emptyNumber = availableNumbers.indexOf('' + key);
          if (emptyNumber != -1) {
            availableNumber.splice(emptyNumber, 1);
          };
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };updateAvalaibleNumbers();

  // Loop over the tiles and add resource name
  var addRandomNumber = function addRandomNumber() {
    numbers.forEach(function (number) {

      var randomNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
      number.textContent = '' + randomNumber;
      tileNumbers[randomNumber].amount--;

      // Drop the current list of available resources
      availableNumbers = [];

      // Rebuild the current list of available resources
      updateAvalaibleNumbers();
    });
  };addRandomNumber();
};
