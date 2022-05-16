class Tile {
  constructor(x, y, posX, posY, size, color) {
    this.x = x;
    this.y = y;
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.color = color;
  }

  drawTile() {
    fill(this.color);
    rect(this.posX, this.posY, this.size, this.size);
  }
}  

class TileUtil{

  static findTile(x, y) {
    let tile = tileData.filter(t => t.x === x && t.y === y);

    if(tile[0]){
      return tile[0];
    }

    return null;
  }

  static findTileByLocation(x, y) {
    let tile = tileData.filter(t => {
      const minX = t.posX;
      const maxX = t.posX + TILE_SIZE;
      const minY = t.posY;
      const maxY = t.posY + TILE_SIZE;
  
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
  
  static changeTileColor(x, y, color) {
    let t = tileData.filter(tile => tile.x === x && tile.y === y);
    if(t[0]){
      t[0].color = color;
    }
  }

  static colorMultipleTiles(moves, color) {  
    moves.forEach(move => {
      this.changeTileColor(move.x, move.y, color);
    });
  }
}