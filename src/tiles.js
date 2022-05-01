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
  
  static changeTileColor(x, y, color) {
    let t = tileData.filter(tile => tile.tile.x === x && tile.tile.y === y);
    t[0].color = color;
  }
}