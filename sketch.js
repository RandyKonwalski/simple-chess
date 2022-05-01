/* eslint-disable no-undef, no-unused-vars */

let pieceImages;

let tileData = [];

const STATE_UNSELECTED = 0;
const STATE_PIECESELECTED = 1;

let selectState = 0;
let previous_color = null;
let selectTile = [0, 0];

const tileSize = 100;
const margin = 13;

function drawTile(x, y, tileSize, color) {
  fill(color);
  rect(x, y, tileSize, tileSize);
}

function drawBoard() {
  for (let i = 0; i < tileData.length; i++) {
    color = !color;
    drawTile(
      tileData[i].tilePos.posX,
      tileData[i].tilePos.posY,
      tileSize,
      tileData[i].color
    );
  }

  for (let i = 0; i < pieceLocations.length; i++) {
    drawPiece(
      pieceLocations[i].pos.x,
      pieceLocations[i].pos.y,
      pieceLocations[i].type,
      pieceLocations[i].color
    );
  }
}

function createTileObject(x, y, posX, posY, color) {
  return {
    tile: {
      x: x,
      y: y
    },
    tilePos: {
      posX: posX,
      posY: posY
    },
    color: color
  };
}

function movePiece(fromX, fromY, toX, toY) {
  let p = pieceLocations.filter(piece => piece.pos.x === fromX && piece.pos.y === fromY);
  if(p[0]){
    p[0].pos.x = toX;
    p[0].pos.y = toY;
  }
  else{
    console.log("Error");
  }
}

const ngb = document.getElementById("newGameButton");
ngb.addEventListener("click", newGameButton);

function newGameButton() {
  movePiece(0, 0, 4, 4);
}

class Tiles{
  static findTile(x, y) {
    let tile = tileData.filter(t => t.tile.x === x && t.tile.y === y);

    if(tile[0]){
      return tile[0];
    }

    return null;
  }

  static findTileByLocation(x, y) {
    let tile = tileData.filter(t => {
      const minX = t.tilePos.posX;
      const maxX = t.tilePos.posX + tileSize;
      const minY = t.tilePos.posY;
      const maxY = t.tilePos.posY + tileSize;
  
      if(x > minX && x < maxX){
        if(y > minY && y < maxY){
          return true;
        }
      }
      return false;
    });
    if(tile[0]){
      return tile[0];
    }
    return null;
  }
}

function changeSquareColor(x, y, color) {
  let t = tileData.filter(tile => tile.tile.x === x && tile.tile.y === y);
  t[0].color = color;
}

// Implement these
function displayAllowedMoves(piece, x, y) {
  
}

function isAllowedMove(piece, x, y, move) {
  return true;
}

/**
 * 
 * Setup and p5 Stuff goes here.
 * 
 */
function preload() {
  pieceImages = {
    king: {
      black: loadImage("./assets/pieces/b_king_1x_ns.png"),
      white: loadImage("./assets/pieces/w_king_1x_ns.png")
    },
    queen: {
      black: loadImage("./assets/pieces/b_queen_1x_ns.png"),
      white: loadImage("./assets/pieces/w_queen_1x_ns.png")
    },
    rook: {
      black: loadImage("./assets/pieces/b_rook_1x_ns.png"),
      white: loadImage("./assets/pieces/w_rook_1x_ns.png")
    },
    knight: {
      black: loadImage("./assets/pieces/b_knight_1x_ns.png"),
      white: loadImage("./assets/pieces/w_knight_1x_ns.png")
    },
    bishop: {
      black: loadImage("./assets/pieces/b_bishop_1x_ns.png"),
      white: loadImage("./assets/pieces/w_bishop_1x_ns.png")
    },
    pawn: {
      black: loadImage("./assets/pieces/b_pawn_1x_ns.png"),
      white: loadImage("./assets/pieces/w_pawn_1x_ns.png")
    }
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let color = true;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      tileData.push(
        createTileObject(x, y, x * tileSize, y * tileSize, color ? 0 : 255)
      );
      color = !color;
    }
    color = !color;
  }
}

function draw() {
  stroke(0);
  drawBoard();
}

function mouseClicked() {
  if(selectState === 0) {
    let tile = Tiles.findTileByLocation(mouseX, mouseY);
    if(tile){
      selectTile = [tile.tile.x, tile.tile.y];
      previous_color = tile.color;
      selectState = STATE_PIECESELECTED;
    }
  }
  else {
    let fromTile = Tiles.findTile(selectTile[0], selectTile[1]);
    let toTile = Tiles.findTileByLocation(mouseX, mouseY);
    movePiece(selectTile[0], selectTile[1], toTile.tile.x, toTile.tile.y);
    fromTile.color = previous_color;
    previous_color = null;
    selectState = STATE_UNSELECTED;
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
