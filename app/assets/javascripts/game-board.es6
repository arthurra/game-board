// Resource tiles
// 4 wood, 4 sheep, 3 brick, 3 wheat, 3 ore, 1 desert

window.onload = function () {

  // Resource types
  let resourceTypes = [ 'wood', 'sheep', 'brick', 'wheat', 'ore', 'desert' ];

  // Amount of each resource
  let woodAmount = 4;
  let sheepAmount = 4;
  let wheatAmount = 4;
  let brickAmount = 3;
  let oreAmount = 3;
  let desertAmount = 1;

  // Resources object
  let resourceTiles = {
    wood: {amount: woodAmount},
    sheep: {amount: sheepAmount},
    wheat: {amount: wheatAmount},
    brick: {amount: brickAmount},
    ore: {amount: oreAmount},
    desert: {amount: desertAmount}
  }

  // Return a node list of the svg elements
  let tiles = document.querySelectorAll('.tile');

  // Array of available resources
  let availableResources = [];

  // Build a list of available resources
  let updateAvalaibleResources = function(){
    for (let key of Object.keys(resourceTiles)) {
      if (resourceTiles[key].amount > 0) {
        availableResources.push(`${key}`)
      } else if (resourceTiles[key].amount == 0) {
        let emptyResource = availableResources.indexOf(`${key}`);
        if (emptyResource != -1){
          availableResources.splice(emptyResource, 1);
        };
      }
    }
  };updateAvalaibleResources();

  // Loop over the tiles and add resource name
  let addRandomResource = function () {
    tiles.forEach(function (tile) {

      let randomResourceName = availableResources[Math.floor(Math.random()*availableResources.length)];

      tile.classList += " " + "tile--" + randomResourceName;
      resourceTiles[randomResourceName].amount--

      console.log(tile.id + " " + "is" + " " + tile.classList);
      console.log(randomResourceName + " tiles left = " + resourceTiles[randomResourceName].amount);

      // Drop the current list of available resources
      availableResources = [];

      // Rebuild the current list of available resources
      updateAvalaibleResources();
    });
  };addRandomResource();


  // Amount of each number
  let twoAmount = 1;
  let threeAmount = 2;
  let fourAmount = 2;
  let fiveAmount = 2;
  let sixAmount = 2;
  // skip seven
  let eightAmount =2;
  let nineAmount = 2;
  let tenAmount = 2;
  let elevenAmount = 2;
  let twelveAmount = 1;

  // Number object
  let tileNumbers = {
    2: {amount: twoAmount},
    3: {amount: threeAmount},
    4: {amount: fourAmount},
    5: {amount: fiveAmount},
    6: {amount: sixAmount},
    // skip seven
    8: {amount: eightAmount},
    9: {amount: nineAmount},
    10: {amount: tenAmount},
    11: {amount: elevenAmount},
    12: {amount: twelveAmount},
  }

  // Return a node list of the svg elements
  let numbers = document.querySelectorAll('.tile:not(.tile--desert) ~ .number');

  // Array of available resources
  let availableNumbers = [];

  // Build a list of available resources
  let updateAvalaibleNumbers = function(){
    for (let key of Object.keys(tileNumbers)) {
      if (tileNumbers[key].amount > 0) {
        availableNumbers.push(`${key}`)
      } else if (tileNumbers[key].amount == 0) {
        let emptyNumber = availableNumbers.indexOf(`${key}`);
        if (emptyNumber != -1){
          availableNumber.splice(emptyNumber, 1);
        };
      }
    }
  };updateAvalaibleNumbers();

  // Loop over the tiles and add resource name
  let addRandomNumber = function () {
    numbers.forEach(function (number) {

      let randomNumber = availableNumbers[Math.floor(Math.random()*availableNumbers.length)];
      number.textContent = `${randomNumber}`;
      tileNumbers[randomNumber].amount--;

      // Drop the current list of available resources
      availableNumbers = [];

      // Rebuild the current list of available resources
      updateAvalaibleNumbers();
    });
  };addRandomNumber();

};
