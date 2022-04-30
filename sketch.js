/* eslint-disable no-undef, no-unused-vars */

let pieceImages;

let pieceLocations = [
  {
    type: "king",
    pos: {
      x: 1,
      y: 2
    }
  }
];

let tileData = [];

const tileSize = 100;

function drawTile(x, y, tileSize, color) {
  fill(color);
  rect(x, y, tileSize, tileSize);
}

function drawPiece(x, y, piece) {
  switch (piece) {
    case "king":
      image(
        pieceImages.king.black,
        x * tileSize,
        y * tileSize,
        tileSize,
        tileSize
      );
      break;
    case "queen":
      image(
        pieceImages.queen.black,
        x * tileSize,
        y * tileSize,
        tileSize,
        tileSize
      );
      break;
    case "knight":
      image(
        pieceImages.knight.black,
        x * tileSize,
        y * tileSize,
        tileSize,
        tileSize
      );
      break;
    case "bishop":
      image(
        pieceImages.bishop.black,
        x * tileSize,
        y * tileSize,
        tileSize,
        tileSize
      );
      break;
    case "pawn":
      image(
        pieceImages.pawn.black,
        x * tileSize,
        y * tileSize,
        tileSize,
        tileSize
      );
      break;
    default:
      break;
  }
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
      pieceLocations[i].type
    );
  }
}

function createTileObject(x, y, posX, posY, color, piece = "none") {
  return {
    tile: {
      x: x,
      y: y
    },
    tilePos: {
      posX: posX,
      posY: posY
    },
    piece: piece,
    color: color
  };
}

/**
 * Setup and p5 Stuff goes here.
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
  // Put drawings here
  stroke(0);
  drawBoard();
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
