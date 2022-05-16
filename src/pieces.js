let startLoc = [
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

class Piece {
  constructor(x, y, type, color) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color;
  }

  drawPiece() {
    switch (this.type) {
      case "king":
        image(
          this.color === "black" ? pieceImages.king.black : pieceImages.king.white,
          this.x * TILE_SIZE + TILE_PADDING,
          this.y * TILE_SIZE + TILE_PADDING,
          TILE_SIZE - TILE_PADDING * 2,
          TILE_SIZE - TILE_PADDING * 2
        );
        break;
      case "queen":
        image(
          this.color === "black" ? pieceImages.queen.black : pieceImages.queen.white,
          this.x * TILE_SIZE + TILE_PADDING,
          this.y * TILE_SIZE + TILE_PADDING,
          TILE_SIZE - TILE_PADDING * 2,
          TILE_SIZE - TILE_PADDING * 2
        );
        break;
      case "knight":
        image(
          this.color === "black" ? pieceImages.knight.black : pieceImages.knight.white,
          this.x * TILE_SIZE + TILE_PADDING,
          this.y * TILE_SIZE + TILE_PADDING,
          TILE_SIZE - TILE_PADDING * 2,
          TILE_SIZE - TILE_PADDING * 2
        );
        break;
      case "bishop":
        image(
          this.color === "black" ? pieceImages.bishop.black : pieceImages.bishop.white,
          this.x * TILE_SIZE + TILE_PADDING,
          this.y * TILE_SIZE + TILE_PADDING,
          TILE_SIZE - TILE_PADDING * 2,
          TILE_SIZE - TILE_PADDING * 2
        );
        break;
      case "rook":
        image(
          this.color === "black" ? pieceImages.rook.black : pieceImages.rook.white,
          this.x * TILE_SIZE + TILE_PADDING,
          this.y * TILE_SIZE + TILE_PADDING,
          TILE_SIZE - TILE_PADDING * 2,
          TILE_SIZE - TILE_PADDING * 2
        );
        break;
      case "pawn":
        image(
          this.color === "black" ? pieceImages.pawn.black : pieceImages.pawn.white,
          this.x * TILE_SIZE + TILE_PADDING,
          this.y * TILE_SIZE + TILE_PADDING,
          TILE_SIZE - TILE_PADDING * 2,
          TILE_SIZE - TILE_PADDING * 2
        );
        break;
      default:
        break;
    }
  }

  getPossibleMoves() {
    let possibleMoves = [];

    switch (this.type) {
      case "king":
        
        break;
      case "queen":
        for(let i = 1; i < 8; i++){
          possibleMoves.push({ x: this.x + i, y: this.y + i });
          possibleMoves.push({ x: this.x - i, y: this.y + i });
          possibleMoves.push({ x: this.x + i, y: this.y - i });
          possibleMoves.push({ x: this.x - i, y: this.y - i });
          possibleMoves.push({ x: this.x, y: this.y - i });
          possibleMoves.push({ x: this.x, y: this.y + i });
          possibleMoves.push({ x: this.x - i, y: this.y });
          possibleMoves.push({ x: this.x + i, y: this.y });
        }
        break;
      case "knight":
        possibleMoves.push({ x: this.x + 1, y: this.y + 2 });
        possibleMoves.push({ x: this.x - 1, y: this.y + 2 });

        possibleMoves.push({ x: this.x + 1, y: this.y - 2 });
        possibleMoves.push({ x: this.x - 1, y: this.y - 2 });

        possibleMoves.push({ x: this.x + 2, y: this.y - 1 });
        possibleMoves.push({ x: this.x - 2, y: this.y + 1 });

        possibleMoves.push({ x: this.x - 2, y: this.y - 1 });
        possibleMoves.push({ x: this.x + 2, y: this.y + 1 });
        break;
      case "bishop":
        for(let i = 1; i < 8; i++){
          possibleMoves.push({ x: this.x + i, y: this.y + i });
          possibleMoves.push({ x: this.x - i, y: this.y + i });
          possibleMoves.push({ x: this.x + i, y: this.y - i });
          possibleMoves.push({ x: this.x - i, y: this.y - i });
        }
        break;
      case "rook":
        for(let i = 1; i < 8; i++){
          possibleMoves.push({ x: this.x, y: this.y - i });
          possibleMoves.push({ x: this.x, y: this.y + i });
          possibleMoves.push({ x: this.x - i, y: this.y });
          possibleMoves.push({ x: this.x + i, y: this.y });
        }
        break;
      case "pawn":
        if(this.color === "black"){
          possibleMoves.push({ x: this.x, y: this.y - 1 });
          if(!PieceUtils.getPieceByLocation(this.x, this.y - 1)) {
            possibleMoves.push({ x: this.x, y: this.y - 2 });
          }
        }
        else {
          possibleMoves.push({ x: this.x, y: this.y + 1 });
          if(!PieceUtils.getPieceByLocation(this.x, this.y + 1)) {
            possibleMoves.push({ x: this.x, y: this.y + 2 });
          }
        }
        break;
    }

    return possibleMoves;
  }
}

class PieceUtils {
  static getPieceByLocation(x, y){
    let piece = allPieces.filter(p => p.x == x && p.y == y);

    if(piece[0]){
      return piece[0];
    }
    return null;
  }
  
  static movePiece(fromX, fromY, toX, toY) {
    let pieceFrom = this.getPieceByLocation(fromX, fromY);
    if(pieceFrom){
      pieceFrom.x = toX;
      pieceFrom.y = toY;
    }
  }
  
  static eliminatePiece(x, y) {
    let New = allPieces.filter(piece => piece.x !== x || piece.y !== y);

    allPieces = New;
  }
}

