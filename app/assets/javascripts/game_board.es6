// Resource tiles
// 4 wood, 4 sheep, 3 brick, 3 wheat, 3 ore, 1 desert

window.onload = function () {

  // Resource types
  let resourceTypes = [ 'wood', 'sheep', 'brick', 'wheat', 'ore', 'desert' ];

  // Amount of each resource
  const woodAmount = 4;
  const sheepAmount = 4;
  const wheatAmount = 4;
  const brickAmount = 3;
  const oreAmount = 3;
  const desertAmount = 1;

  // Resources object
  let resourceTiles = {
    wood: woodAmount,
    sheep: sheepAmount,
    wheat: wheatAmount,
    brick: brickAmount,
    ore: oreAmount,
    desert: desertAmount
  }

  // Return a node list of the svg elements
  let tiles = document.querySelectorAll('.tile');


  let addRandomResource = function () {
    tiles.forEach(function (tile) {
      tile.classList += " " + "tile--" + resourceTypes[Math.floor(Math.random()*resourceTypes.length)];
      console.log(tile.id + " " + "is" + " " + tile.classList);
    });
  };

  addRandomResource();

  // Print out all of the business
  console.log("Number of tiles =" + " " + tiles.length);
  console.log("Number of resource types =" + " " + resourceTypes.length);
  console.log("Number of wood tiles =" + " " + resourceTiles.wood);
  console.log("Number of sheep tiles =" + " " + resourceTiles.sheep);
  console.log("Number of wheat tiles =" + " " + resourceTiles.wheat);
  console.log("Number of brick tiles =" + " " + resourceTiles.brick);
  console.log("Number of ore tiles =" + " " + resourceTiles.ore);
  console.log("Number of desert tiles =" + " " + resourceTiles.desert);

};

// Resource array
// var resources = [ brick,
//                   brick,
//                   brick,
//                   wood,
//                   wood,
//                   wood,
//                   wood,
//                   sheep,
//                   sheep,
//                   sheep,
//                   sheep,
//                   wheat,
//                   wheat,
//                   wheat,
//                   wheat,
//                   ore,
//                   ore,
//                   ore,
//                   desert ];
