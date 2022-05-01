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