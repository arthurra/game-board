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

  // Print out all of the business
  console.log("Number of tiles =" + " " + tiles.length);
  console.log("Number of resource types =" + " " + resourceTypes.length);
  console.log("Number of wood tiles =" + " " + resourceTiles.wood.amount);
  console.log("Number of sheep tiles =" + " " + resourceTiles.sheep.amount);
  console.log("Number of wheat tiles =" + " " + resourceTiles.wheat.amount);
  console.log("Number of brick tiles =" + " " + resourceTiles.brick.amount);
  console.log("Number of ore tiles =" + " " + resourceTiles.ore.amount);
  console.log("Number of desert tiles =" + " " + resourceTiles.desert.amount);

};
