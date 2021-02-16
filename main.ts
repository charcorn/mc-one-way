sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 9 3 3 3 3 3 3 8 3 . . . 
    . . 3 8 9 3 3 3 3 3 3 8 8 3 . . 
    . 3 8 8 9 9 9 9 9 9 3 8 8 9 3 d 
    . 3 8 3 a a a a a a a b 8 9 3 3 
    . 3 3 a 9 9 a 9 9 9 a a b 9 3 3 
    . 3 a 9 9 9 a 9 9 9 9 a 3 3 3 3 
    . a a 9 9 9 a 9 9 9 9 9 a 3 3 3 
    . a a a a a a f a a a f a 3 d d 
    . a a a a a a f a a f a a a 3 d 
    . a a a a a a f f f a a a a a a 
    . a f f f f a a a a f f f a a a 
    . . f f f f f a a f f f f f a . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(0, 55)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.setLife(5)
forever(function () {
    for (let index = 0; index < 6; index++) {
        mySprite2 = sprites.create(assets.image`e`, SpriteKind.Enemy)
        mySprite2.setPosition(160, randint(0, 120))
        tiles.placeOnRandomTile(mySprite2, sprites.vehicle.roadHorizontal)
        mySprite2.setVelocity(randint(-50, -100), 0)
        mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
    }
    info.changeScoreBy(1)
    pause(4000)
})
forever(function () {
    while (mySprite.tileKindAt(TileDirection.Right, sprites.castle.tileDarkGrass2)) {
        game.over(true)
    }
})
