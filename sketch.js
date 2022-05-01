/* eslint-disable no-undef, no-unused-vars */

let pieceImages;

let pieceLocations = [
  {
    type: "king",
    color: "black",
    pos: {
      x: 4,
      y: 7
    }
  },
  {
    type: "queen",
    color: "black",
    pos: {
      x: 3,
      y: 7
    }
  },
  {
    type: "bishop",
    color: "black",
    pos: {
      x: 2,
      y: 7
    }
  },
  {
    type: "bishop",
    color: "black",
    pos: {
      x: 5,
      y: 7
    }
  },
  {
    type: "knight",
    color: "black",
    pos: {
      x: 1,
      y: 7
    }
  },
  {
    type: "knight",
    color: "black",
    pos: {
      x: 6,
      y: 7
    }
  },
  {
    type: "rook",
    color: "black",
    pos: {
      x: 0,
      y: 7
    }
  },
  {
    type: "rook",
    color: "black",
    pos: {
      x: 7,
      y: 7
    }
  },
  {
    type: "pawn",
    color: "black",
    pos: {
      x: 0,
      y: 6
    }
  },  
  {
    type: "pawn",
    color: "black",
    pos: {
      x: 1,
      y: 6
    }
  },
  {
    type: "pawn",
    color: "black",
    pos: {
      x: 2,
      y: 6
    }
  },
  {
    type: "pawn",
    color: "black",
    pos: {
      x: 3,
      y: 6
    }
  },
  {
    type: "pawn",
    color: "black",
    pos: {
      x: 4,
      y: 6
    }
  },
  {
    type: "pawn",
    color: "black",
    pos: {
      x: 5,
      y: 6
    }
  },
  {
    type: "pawn",
    color: "black",
    pos: {
      x: 6,
      y: 6
    }
  },
  {
    type: "pawn",
    color: "black",
    pos: {
      x: 7,
      y: 6
    }
  },


  {
    type: "king",
    color: "white",
    pos: {
      x: 4,
      y: 0
    }
  },
  {
    type: "queen",
    color: "white",
    pos: {
      x: 3,
      y: 0
    }
  },
  {
    type: "bishop",
    color: "white",
    pos: {
      x: 2,
      y: 0
    }
  },
  {
    type: "bishop",
    color: "white",
    pos: {
      x: 5,
      y: 0
    }
  },
  {
    type: "knight",
    color: "white",
    pos: {
      x: 1,
      y: 0
    }
  },
  {
    type: "knight",
    color: "white",
    pos: {
      x: 6,
      y: 0
    }
  },
  {
    type: "rook",
    color: "white",
    pos: {
      x: 0,
      y: 0
    }
  },
  {
    type: "rook",
    color: "white",
    pos: {
      x: 7,
      y: 0
    }
  },
  {
    type: "pawn",
    color: "white",
    pos: {
      x: 0,
      y: 1
    }
  },  
  {
    type: "pawn",
    color: "white",
    pos: {
      x: 1,
      y: 1
    }
  },
  {
    type: "pawn",
    color: "white",
    pos: {
      x: 2,
      y: 1
    }
  },
  {
    type: "pawn",
    color: "white",
    pos: {
      x: 3,
      y: 1
    }
  },
  {
    type: "pawn",
    color: "white",
    pos: {
      x: 4,
      y: 1
    }
  },
  {
    type: "pawn",
    color: "white",
    pos: {
      x: 5,
      y: 1
    }
  },
  {
    type: "pawn",
    color: "white",
    pos: {
      x: 6,
      y: 1
    }
  },
  {
    type: "pawn",
    color: "white",
    pos: {
      x: 7,
      y: 1
    }
  }
];

let tileData = [];

const tileSize = 100;
const margin = 13;

function drawTile(x, y, tileSize, color) {
  fill(color);
  rect(x, y, tileSize, tileSize);
}

function drawPiece(x, y, piece, color) {
  switch (piece) {
    case "king":
      image(
        color === "black" ? pieceImages.king.black : pieceImages.king.white,
        x * tileSize + margin,
        y * tileSize + margin,
        tileSize - margin * 2,
        tileSize - margin * 2
      );
      break;
    case "queen":
      image(
        color === "black" ? pieceImages.queen.black : pieceImages.queen.white,
        x * tileSize + margin,
        y * tileSize + margin,
        tileSize - margin * 2,
        tileSize - margin * 2
      );
      break;
    case "knight":
      image(
        color === "black" ? pieceImages.knight.black : pieceImages.knight.white,
        x * tileSize + margin,
        y * tileSize + margin,
        tileSize - margin * 2,
        tileSize - margin * 2
      );
      break;
    case "bishop":
      image(
        color === "black" ? pieceImages.bishop.black : pieceImages.bishop.white,
        x * tileSize + margin,
        y * tileSize + margin,
        tileSize - margin * 2,
        tileSize - margin * 2
      );
      break;
    case "rook":
      image(
        color === "black" ? pieceImages.rook.black : pieceImages.rook.white,
        x * tileSize + margin,
        y * tileSize + margin,
        tileSize - margin * 2,
        tileSize - margin * 2
      );
      break;
    case "pawn":
      image(
        color === "black" ? pieceImages.pawn.black : pieceImages.pawn.white,
        x * tileSize + margin,
        y * tileSize + margin,
        tileSize - margin * 2,
        tileSize - margin * 2
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

// Implement these
function displayAllowedMoves(piece, x, y) {
  // Mark squares with red if a move is possible.
}

function isAllowedMove(piece, x, y, move) {
  return true;
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
