scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tilemap`level`)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement(true)
myCorg.verticalMovement(true)
myCorg.updateSprite()
myCorg.follow()
