/* eslint-disable no-undef, no-unused-vars */

let allPieces;
let pieceImages;

let tileData = [];

let moves = {
  pawn: [
    [0, 2]
  ]
}

const STATE_UNSELECTED = 0;
const STATE_PIECESELECTED = 1;

let selectState = 0;
let previous_color = null;
let selectedPiece = [0, 0];

const tileSize = 100;
const margin = 13;

function parseStartLocation(array) {
  let result = [];

  array.forEach(elem => {
    result.push(new Piece(elem.pos.x, elem.pos.y, elem.type, elem.color));
  });

  return result;
}

function drawBoard() {
  tileData.forEach(tile => {
    color = !color;
    tile.drawTile();
  });

  allPieces.forEach(piece => {
    piece.drawPiece();
  });
}

const ngb = document.getElementById("newGameButton");
ngb.addEventListener("click", newGameButton);

function newGameButton() {
  allPieces = parseStartLocation(startLoc);
}

// Move System
function displayAllowedMoves(piece, x, y) {
  
}

function isAllowedMove(piece, x, y, move) {
  return true;
}

/*let chessNotationLanguage = {
  type: {
    king: "K",
    queen: "Q",
    rook: "R",
    bishop: "B",
    knight: "N",
    pawn: "K"
  }
}

function parseChessNotation(chessString) {
  let parsedPiece = 

  let buffer = "";

  for(let c in chessString){
    buffer.concat(c);
    switch(buffer){
      case chessNotationLanguage.type.king:
        parsedPiece()
      case chessNotationLanguage.type.queen:
        
      case chessNotationLanguage.type.rook:
        
      case chessNotationLanguage.type.bishop:
        
      case chessNotationLanguage.type.knight:
        
      case chessNotationLanguage.type.pawn:
        
    }
  }
}*/

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
  var canvas = createCanvas(800, 800);
  canvas.parent('canvas');

  allPieces = parseStartLocation(startLoc);

  let color = true;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      tileData.push(
        new Tile(x, y, x * tileSize, y * tileSize, tileSize, color ? 0 : 255)
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
    let tile = TileUtil.findTileByLocation(mouseX, mouseY);
    // TODO: Check if tile has piece.
    if(tile){
      document.getElementById("piece").innerHTML = `[${tile.x}, ${tile.y}]`;
      selectedPiece = PieceUtils.getPieceByLocation(tile.x, tile.y);
      previous_color = tile.color;
      tile.color = "red";
      selectState = STATE_PIECESELECTED;
    }
  }
  else {
    let fromTile = TileUtil.findTile(selectedPiece.x, selectedPiece.y);
    let toTile = TileUtil.findTileByLocation(mouseX, mouseY);

    if(!(fromTile == toTile)) {
      let piece = PieceUtils.getPieceByLocation(toTile.x, toTile.y);
      if(piece){
        if(piece.color !== selectedPiece.color){
          PieceUtils.movePiece(selectedPiece.x, selectedPiece.y, toTile.x, toTile.y);
        }
      }
      else {
        PieceUtils.movePiece(selectedPiece.x, selectedPiece.y, toTile.x, toTile.y);
        fromTile.color = previous_color;
        previous_color = null;
        selectState = STATE_UNSELECTED;
      }
    }
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
