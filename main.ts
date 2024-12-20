namespace SpriteKind {
    export const Maskine = SpriteKind.create()
    export const Worker = SpriteKind.create()
    export const TalkingWorker = SpriteKind.create()
    export const Klimamand = SpriteKind.create()
    export const MissionGadget = SpriteKind.create()
    export const Chefen = SpriteKind.create()
}
// tag
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        shootDirection = 3
    }
    if (LVL == 1 && PickUpNatron != 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f d 5 5 5 5 5 5 d f . . 
            . f d 5 5 5 5 5 5 5 5 d f . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            f b 5 5 5 5 5 5 5 5 5 5 b f 
            f b 5 5 5 5 5 5 5 5 5 5 b f 
            f b b 5 5 5 5 5 5 5 5 b b f 
            f b b b d 5 5 5 5 d b b b f 
            f b b b b b b b b b b b b f 
            f f b b b b b b b b b b f . 
            . c c b b b b b b b b c c . 
            . 4 d c f f f f f f c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 b f f . . 
            . . . . f f b b f f . . . . 
            `],
        500,
        false
        )
    }
    if (LVL == 2 && PickUpNatron != 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f d 5 5 5 5 5 5 d f . . 
            . f d 5 5 5 5 5 5 5 5 d f . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            f b 5 5 5 5 5 5 5 5 5 5 b f 
            f b 5 5 5 5 5 5 5 5 5 5 b f 
            f b b 5 5 5 5 5 5 5 5 b b f 
            f b b b d 5 5 5 5 d b b b f 
            f b b b b b b b b b b b b f 
            f f b b b b b b b b b b f . 
            . c c b b b b b b b b c c . 
            . 4 d c f f f f f f c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 b f f . . 
            . . . . f f b b f f . . . . 
            `],
        500,
        false
        )
    }
})
// Indstil dit tilemap her!
// Når spilleren træder på en bestemt tile
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Floor62`, function (sprite, location) {
    if (LVL == 2) {
        // Skift flisen til en ny tile
        tiles.setTileAt(location, assets.tile`Flooor61`)
        sprites.destroy(projectile)
        info.changeScoreBy(1)
    }
})
// Gustavs del
function Kemilalier () {
    for (let index = 0; index < 1; index++) {
        pause(2000)
        while (tilfældigkemi == nykemi) {
            nykemi = randint(1, 6)
        }
        tilfældigkemi = nykemi
        if (nykemi == 1) {
            kemi_1 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
        } else if (nykemi == 2) {
            kemi_1 = sprites.create(assets.image`myImage12`, SpriteKind.Enemy)
        } else if (nykemi == 3) {
            kemi_1 = sprites.create(assets.image`myImage13`, SpriteKind.Enemy)
        } else if (nykemi == 4) {
            kemi_1 = sprites.create(assets.image`myImage14`, SpriteKind.Enemy)
        } else if (nykemi == 5) {
            kemi_1 = sprites.create(assets.image`myImage15`, SpriteKind.Enemy)
        } else if (nykemi == 6) {
            kemi_1 = sprites.create(assets.image`myImage17`, SpriteKind.Enemy)
        }
    }
    for (let index = 0; index < 1; index++) {
        if (info.score() >= 27) {
            Cleanup_EnemySprites2()
        }
        kemi_1.setPosition(70, 63)
        kemi_1.setVelocity(randint(-40, 40), randint(30, 70))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TalkingWorker, function (sprite, otherSprite) {
    Arbejdermand.sayText("Pas på Truckliftene, de har travlt og ser dig nok ikke!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Factory floor6`, function (sprite, location) {
    if (LVL == 1) {
        Kontordame.sayText("Velkommen")
        animation.runImageAnimation(
        Kontordame,
        assets.animation`Kanimation03`,
        200,
        false
        )
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 1 && mySprite.overlapsWith(Natron1)) {
        sprites.destroy(Natron1)
        PickUpNatron += PickUpNatron + 1
        animation.runImageAnimation(
        mySprite,
        assets.animation`Manimation05`,
        500,
        true
        )
    }
})
function Cleanup_EnemySprites () {
    let stop = 0
    information = stop
    GameAstarted = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
}
function Truck () {
    if (LVL == 1) {
        Trucken = sprites.create(assets.image`Truck`, SpriteKind.Maskine)
        Trucken.setPosition(800, 416)
        Trucken.setVelocity(30, 30)
        Trucken.setBounceOnWall(true)
        Trucken = sprites.create(assets.image`Truck`, SpriteKind.Maskine)
        Trucken.setPosition(200, 416)
        Trucken.setVelocity(50, 50)
        Trucken.setBounceOnWall(true)
        if (Trucken.vx <= -1) {
            animation.runImageAnimation(
            Trucken,
            assets.animation`truckanimation`,
            200,
            true
            )
            animation.runImageAnimation(
            Trucken,
            assets.animation`truckanimation`,
            200,
            true
            )
        } else if (Trucken.vx > 1) {
            animation.runImageAnimation(
            Trucken,
            assets.animation`myAnim0`,
            200,
            true
            )
            animation.runImageAnimation(
            Trucken,
            assets.animation`myAnim0`,
            200,
            true
            )
        }
    }
    if (Trucken.vx > -1) {
        animation.runImageAnimation(
        Trucken,
        assets.animation`truckanimation`,
        200,
        true
        )
        animation.runImageAnimation(
        Trucken,
        assets.animation`truckanimation`,
        200,
        true
        )
    } else if (Trucken.vx > 1) {
        animation.runImageAnimation(
        Trucken,
        assets.animation`myAnim0`,
        200,
        true
        )
        animation.runImageAnimation(
        Trucken,
        assets.animation`myAnim0`,
        200,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 1) {
        if (PickUpNatron == 1 && mySprite.overlapsWith(Farvebeholder1)) {
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 1, 34, 0, 700, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            animation.runImageAnimation(
            mySprite,
            assets.animation`MAnimation`,
            500,
            false
            )
            animation.runImageAnimation(
            Farvebeholder1,
            assets.animation`Farveanimation0`,
            300000,
            true
            )
            Farvebeholderne += 1
            if (Farvebeholderne >= 3 && Farvebeholderne < 5) {
                pause(2000)
                game.showLongText("Godt klaret, du har nu neutraliseret kemikalierne i farvestoffet, så det ikke er lige så farligt for det omkringliggende natur! ", DialogLayout.Full)
                game.showLongText("Gå hen til klimaaktivisten for næste instruktioner", DialogLayout.Full)
                PickUpNatron += 1
                Plusplus += 1
                if (LVL == 1) {
                    if (PickUpNatron == 2) {
                        animation.runImageAnimation(
                        mySprite,
                        [img`
                            . . . . . f f f f . . . . . 
                            . . . f f 5 5 5 5 f f . . . 
                            . . f 5 5 5 5 5 5 5 5 f . . 
                            . f 5 5 5 5 5 5 5 5 5 5 f . 
                            . f 5 5 5 d b b d 5 5 5 f . 
                            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
                            f 5 5 c c 4 4 4 4 c c 5 5 f 
                            f b b f b f 4 4 f b f b b f 
                            f b b 4 1 f d d f 1 4 b b f 
                            . f b f d d d d d d f b f . 
                            . f e f e 4 4 4 4 e f e f . 
                            . e 4 f 6 9 9 9 9 6 f 4 e . 
                            . 4 d c 9 9 9 9 9 9 c d 4 . 
                            . 4 f b 3 b 3 b 3 b b f 4 . 
                            . . f f 3 b 3 b 3 3 f f . . 
                            . . . . f f b b f f . . . . 
                            `],
                        500,
                        false
                        )
                    }
                }
            }
        } else if (PickUpNatron == 1 && mySprite.overlapsWith(Farvebeholder2)) {
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 1, 34, 0, 700, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            animation.runImageAnimation(
            mySprite,
            assets.animation`Manimation01`,
            500,
            false
            )
            animation.runImageAnimation(
            Farvebeholder2,
            assets.animation`Farveanimation0`,
            300000,
            true
            )
            Farvebeholderne += 1
            if (Farvebeholderne >= 3 && Farvebeholderne < 5) {
                pause(2000)
                game.showLongText("Godt klaret, du har nu neutraliseret kemikalierne i farvestoffet, så det ikke er lige så farligt for det omkringliggende natur!  ", DialogLayout.Full)
                game.showLongText("Gå hen til klimaaktivisten for næste instruktioner", DialogLayout.Full)
                PickUpNatron += 1
                Plusplus += 1
                if (LVL == 1) {
                    if (PickUpNatron == 2) {
                        animation.runImageAnimation(
                        mySprite,
                        [img`
                            . . . . . f f f f . . . . . 
                            . . . f f 5 5 5 5 f f . . . 
                            . . f 5 5 5 5 5 5 5 5 f . . 
                            . f 5 5 5 5 5 5 5 5 5 5 f . 
                            . f 5 5 5 d b b d 5 5 5 f . 
                            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
                            f 5 5 c c 4 4 4 4 c c 5 5 f 
                            f b b f b f 4 4 f b f b b f 
                            f b b 4 1 f d d f 1 4 b b f 
                            . f b f d d d d d d f b f . 
                            . f e f e 4 4 4 4 e f e f . 
                            . e 4 f 6 9 9 9 9 6 f 4 e . 
                            . 4 d c 9 9 9 9 9 9 c d 4 . 
                            . 4 f b 3 b 3 b 3 b b f 4 . 
                            . . f f 3 b 3 b 3 3 f f . . 
                            . . . . f f b b f f . . . . 
                            `],
                        500,
                        false
                        )
                    }
                }
            }
        } else if (PickUpNatron == 1 && mySprite.overlapsWith(Farvebeholder3)) {
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 1, 34, 0, 700, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            animation.runImageAnimation(
            mySprite,
            assets.animation`Manimation03`,
            200,
            false
            )
            animation.runImageAnimation(
            Farvebeholder3,
            assets.animation`Farveanimation0`,
            300000,
            true
            )
            Farvebeholderne += 1
            if (Farvebeholderne >= 3 && Farvebeholderne < 5) {
                if (LVL == 1) {
                    pause(1000)
                    game.showLongText("Godt klaret, du har nu neutraliseret kemikalierne i farvestoffet, så det ikke er lige så farligt for det omkringliggende natur! ", DialogLayout.Full)
                    game.showLongText("Gå hen til klimaaktivisten for næste instruktioner", DialogLayout.Full)
                    PickUpNatron += 1
                    Plusplus += 1
                    if (PickUpNatron == 2) {
                        animation.runImageAnimation(
                        mySprite,
                        [img`
                            . . . . . f f f f . . . . . 
                            . . . f f 5 5 5 5 f f . . . 
                            . . f 5 5 5 5 5 5 5 5 f . . 
                            . f 5 5 5 5 5 5 5 5 5 5 f . 
                            . f 5 5 5 d b b d 5 5 5 f . 
                            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
                            f 5 5 c c 4 4 4 4 c c 5 5 f 
                            f b b f b f 4 4 f b f b b f 
                            f b b 4 1 f d d f 1 4 b b f 
                            . f b f d d d d d d f b f . 
                            . f e f e 4 4 4 4 e f e f . 
                            . e 4 f 6 9 9 9 9 6 f 4 e . 
                            . 4 d c 9 9 9 9 9 9 c d 4 . 
                            . 4 f b 3 b 3 b 3 b b f 4 . 
                            . . f f 3 b 3 b 3 3 f f . . 
                            . . . . f f b b f f . . . . 
                            `],
                        500,
                        false
                        )
                    }
                }
            }
        }
    }
    if (LVL == 2) {
        if (shootDirection == 1) {
            projectile = sprites.createProjectileFromSprite(assets.image`vand01`, mySprite, 100, 0)
            music.play(music.createSoundEffect(WaveShape.Sine, 1, 600, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else if (shootDirection == 2) {
            projectile = sprites.createProjectileFromSprite(assets.image`vand01`, mySprite, -100, 0)
            music.play(music.createSoundEffect(WaveShape.Sine, 1, 600, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else if (shootDirection == 3) {
            projectile = sprites.createProjectileFromSprite(assets.image`vand01`, mySprite, 0, -100)
            music.play(music.createSoundEffect(WaveShape.Sine, 1, 600, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else if (shootDirection == 4) {
            projectile = sprites.createProjectileFromSprite(assets.image`vand01`, mySprite, 0, 100)
            music.play(music.createSoundEffect(WaveShape.Sine, 1, 600, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else {
        	
        }
        pause(500)
    }
    if (startmode == true) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        startmode = false
        SpilA()
    }
})
info.onScore(15, function () {
    if (GameAstarted == true) {
        game.showLongText("Vidste du godt at tekstil industrien står for 10% af den samlede co2 udledning i verdenen.", DialogLayout.Bottom)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        shootDirection = 2
    }
    if (GameAstarted == true) {
        Spiller.setVelocity(-65, 0)
    }
    if (LVL == 1 && PickUpNatron != 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f c c c . . . . . 
            . f f 5 5 5 5 5 5 f f . . . 
            . f 5 5 5 5 5 5 5 5 5 f . . 
            f 5 5 5 5 5 5 5 5 5 5 5 c . 
            f 5 5 b d 5 5 5 5 5 5 5 c . 
            f 5 d 4 4 b 5 5 5 5 5 5 5 f 
            f 5 b 4 4 4 c c 5 5 5 5 5 f 
            f f f 4 4 c b c b 5 5 5 b f 
            . f f d d c 1 e b b b b b c 
            . . f d d d d 4 f b b b b c 
            . . f 4 4 4 e e e 4 b b c . 
            . . f 9 9 9 e d d 4 f f . . 
            . . f 9 9 9 e d d e f . . . 
            . f 3 3 b 3 b e e b f . . . 
            . f f 3 b 3 b 3 b f f . . . 
            . . . f f b b f f . . . . . 
            `],
        500,
        false
        )
    }
    if (LVL == 2 && PickUpNatron != 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f c c c . . . . . 
            . f f 5 5 5 5 5 5 f f . . . 
            . f 5 5 5 5 5 5 5 5 5 f . . 
            f 5 5 5 5 5 5 5 5 5 5 5 c . 
            f 5 5 b d 5 5 5 5 5 5 5 c . 
            f 5 d 4 4 b 5 5 5 5 5 5 5 f 
            f 5 b 4 4 4 c c 5 5 5 5 5 f 
            f f f 4 4 c b c b 5 5 5 b f 
            . f f d d c 1 e b b b b b c 
            . . f d d d d 4 f b b b b c 
            . . f 4 4 4 e e e 4 b b c . 
            . . f 9 9 9 e d d 4 f f . . 
            . . f 9 9 9 e d d e f . . . 
            . f 3 3 b 3 b e e b f . . . 
            . f f 3 b 3 b 3 b f f . . . 
            . . . f f b b f f . . . . . 
            `],
        500,
        false
        )
    }
})
info.onScore(28, function () {
    if (LVL == 0) {
        if (GameAstarted == false) {
            Cleanup_EnemySprites()
            scene.setBackgroundImage(assets.image`myImage19`)
            effects.confetti.endScreenEffect()
            game.showLongText("Tillykke du har nu hjulpet med at rengøre vandet, fra de farlige kamikalier.", DialogLayout.Full)
            IndePåFabrik()
            info.setScore(0)
            Plusplus = 0
            PickUpNatron = 0
            Farvebeholderne = 0
            TekstCount = 0
            LVL = 1
        }
    }
})
info.onScore(144, function () {
    if (LVL == 2) {
        game.splash("Du har nu gjort alle solceller rene. Gå ned til Chefen igen.")
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile3`, function (sprite, location) {
    if (GameAstarted == true) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        info.changeLifeBy(-1)
        if (info.life() == 0) {
            game.gameOver(false)
            game.splash("Du vandt desværre ikke, men forsøg igen.")
        }
    }
})
function Klimaaktivist () {
    if (LVL == 1) {
        Klimaaktivisten = sprites.create(assets.image`Karakter 14`, SpriteKind.Klimamand)
        Klimaaktivisten.setPosition(912, 112)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Gulv0`, function (sprite, location) {
    if (info.score() == 145 && Plusplus == 4) {
        game.showLongText("Sidste opgave er en quiz! Du skal svare på hvor mange procent af verdens samlede co2 udledninger kommer fra tekstil industrien?", DialogLayout.Full)
        KemiSpørgsmål = game.askForNumber("", 2)
        info.changeScoreBy(1)
    }
    if (KemiSpørgsmål == 10 && info.score() == 146) {
        animation.runImageAnimation(
        Poly_varme,
        assets.animation`polyvarmpåstrøm`,
        200,
        true
        )
        game.showLongText("Sådan der! du kan nu gå hen og se Polyester Varmeren kører på strøm istedet for brændstof", DialogLayout.Full)
        game.showLongText("Derefter skal du tilbage til chefen", DialogLayout.Full)
        info.changeScoreBy(1)
    }
    if (KemiSpørgsmål == 10 && info.score() == 146) {
        animation.runImageAnimation(
        Poly_varme,
        assets.animation`polyvarmpåstrøm`,
        200,
        true
        )
    }
})
function Cleanup_EnemySprites2 () {
    GameAstarted = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
}
info.onScore(10, function () {
    if (LVL == 2) {
        game.showLongText("Vidste du at tekstilindustrien udleder 4 milliarder tons CO2 årligt", DialogLayout.Full)
        game.showLongText("Vidste du at tekstilindustrien udleder 4 milliarder tons CO2 årligt", DialogLayout.Full)
    }
})
function SpilA () {
    if (LVL == 0) {
        Spiller = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f d 5 5 5 5 5 5 d f . . 
            . f d 5 5 5 5 5 5 5 5 d f . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            f b 5 5 5 5 5 5 5 5 5 5 b f 
            f b 5 5 5 5 5 5 5 5 5 5 b f 
            f b b 5 5 5 5 5 5 5 5 b b f 
            f b b b d 5 5 5 5 d b b b f 
            f b b b b b b b b b b b b f 
            f f b b b b b b b b b b f . 
            . c c b b b b b b b b c c . 
            . 4 d c f f f f f f c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 b f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.Player)
        if (GameAstarted == false) {
            scene.setBackgroundImage(assets.image`myImage4`)
        }
        GameAstarted = true
        Spiller.setPosition(81, 113)
        Spiller.setStayInScreen(true)
        game.splash("Hej vi får brug for din hjælp til at fjerne de farlige kemikalier fra vandet")
        pause(2000)
        info.setLife(3)
        while (GameAstarted == true) {
            scene.setBackgroundImage(assets.image`myImage5`)
            tiles.setCurrentTilemap(tilemap`level`)
            pause(1000)
            scene.setBackgroundImage(assets.image`myImage6`)
            tiles.setCurrentTilemap(tilemap`level`)
            Kemilalier()
            pause(1000)
            scene.setBackgroundImage(assets.image`myImage7`)
            tiles.setCurrentTilemap(tilemap`level`)
            Kemilalier()
            pause(1000)
            scene.setBackgroundImage(assets.image`myImage8`)
            tiles.setCurrentTilemap(tilemap`level`)
            Kemilalier()
            pause(1000)
            scene.setBackgroundImage(assets.image`myImage9`)
            tiles.setCurrentTilemap(tilemap`level`)
            Kemilalier()
            pause(1000)
            scene.setBackgroundImage(assets.image`myImage10`)
            tiles.setCurrentTilemap(tilemap`level`)
            Kemilalier()
            pause(1000)
            scene.setBackgroundImage(assets.image`myImage19`)
            tiles.setCurrentTilemap(tilemap`level`)
            Kemilalier()
            if (info.score() == 5) {
                game.showLongText("Vidste du at tekstilproduktion anslåes til at være ansvarlig for 20% af den globale vandforurening?", DialogLayout.Bottom)
            }
            if (info.score() >= 27) {
                Cleanup_EnemySprites()
            }
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        shootDirection = 1
    }
    if (GameAstarted == true) {
        Spiller.setVelocity(65, 0)
    }
    if (LVL == 1 && PickUpNatron != 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . c c c f f f . . . 
            . . . f f 5 5 5 5 5 5 f f . 
            . . f 5 5 5 5 5 5 5 5 5 f . 
            . c 5 5 5 5 5 5 5 5 5 5 5 f 
            . c 5 5 5 5 5 5 5 d b 5 5 f 
            f 5 5 5 5 5 5 5 b 4 4 d 5 f 
            f 5 5 5 5 5 c c 4 4 4 b 5 f 
            f b 5 5 5 b c b c 4 4 f f f 
            c b b b b b e 1 c d d f f . 
            c b b b b f 4 d d d d f . . 
            . c b b 4 e e e 4 4 4 f . . 
            . . f f 4 d d e 9 9 9 f . . 
            . . . f e d d e 9 9 9 f . . 
            . . . f b e e b 3 b 3 3 f . 
            . . . f f b 3 b 3 b 3 f f . 
            . . . . . f f b b f f . . . 
            `],
        500,
        false
        )
    }
    if (LVL == 2 && PickUpNatron != 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . c c c f f f . . . 
            . . . f f 5 5 5 5 5 5 f f . 
            . . f 5 5 5 5 5 5 5 5 5 f . 
            . c 5 5 5 5 5 5 5 5 5 5 5 f 
            . c 5 5 5 5 5 5 5 d b 5 5 f 
            f 5 5 5 5 5 5 5 b 4 4 d 5 f 
            f 5 5 5 5 5 c c 4 4 4 b 5 f 
            f b 5 5 5 b c b c 4 4 f f f 
            c b b b b b e 1 c d d f f . 
            c b b b b f 4 d d d d f . . 
            . c b b 4 e e e 4 4 4 f . . 
            . . f f 4 d d e 9 9 9 f . . 
            . . . f e d d e 9 9 9 f . . 
            . . . f b e e b 3 b 3 3 f . 
            . . . f f b 3 b 3 b 3 f f . 
            . . . . . f f b b f f . . . 
            `],
        500,
        false
        )
    }
})
info.onScore(80, function () {
    if (LVL == 2) {
        game.showLongText("Vidste du godt at ved produktion af syntetiske tekstiler bruges der 70 mio. tønder olie om året", DialogLayout.Bottom)
        game.showLongText("Vidste du godt at ved produktion af syntetiske tekstiler bruges der 70 mio. tønder olie om året", DialogLayout.Bottom)
    }
})
function Factoryworker () {
    if (LVL == 1) {
        Worker1 = sprites.create(assets.image`Karakter 11`, SpriteKind.Worker)
        Worker1.setPosition(768, 688)
        animation.runImageAnimation(
        Worker1,
        assets.animation`Kanimation02`,
        200,
        true
        )
        Worker1 = sprites.create(assets.image`Karakter 11`, SpriteKind.Worker)
        Worker1.setPosition(672, 624)
        animation.runImageAnimation(
        Worker1,
        assets.animation`Kanimation02`,
        200,
        true
        )
        Worker1 = sprites.create(assets.image`Karakter 11`, SpriteKind.Worker)
        Worker1.setPosition(864, 720)
        animation.runImageAnimation(
        Worker1,
        assets.animation`Kanimation02`,
        200,
        true
        )
        Worker1 = sprites.create(assets.image`Karakter 11`, SpriteKind.Worker)
        Worker1.setPosition(768, 896)
        animation.runImageAnimation(
        Worker1,
        assets.animation`Kanimation02`,
        200,
        true
        )
        Worker1 = sprites.create(assets.image`Karakter 11`, SpriteKind.Worker)
        Worker1.setPosition(752, 624)
        animation.runImageAnimation(
        Worker1,
        assets.animation`Kanimation02`,
        200,
        true
        )
        Worker1 = sprites.create(assets.image`Karakter 11`, SpriteKind.Worker)
        Worker1.setPosition(816, 512)
        animation.runImageAnimation(
        Worker1,
        assets.animation`Kanimation02`,
        200,
        true
        )
        Worker1 = sprites.create(assets.image`Karakter 11`, SpriteKind.Worker)
        Worker1.setPosition(848, 400)
        animation.runImageAnimation(
        Worker1,
        assets.animation`Kanimation02`,
        200,
        true
        )
        Worker1 = sprites.create(assets.image`Karakter 11`, SpriteKind.Worker)
        Worker1.setPosition(560, 640)
        animation.runImageAnimation(
        Worker1,
        assets.animation`Kanimation02`,
        200,
        true
        )
        Kontordame = sprites.create(assets.image`Karakter 12`, SpriteKind.Worker)
        Kontordame.setPosition(480, 784)
        Arbejdermand = sprites.create(assets.image`Karakter 13`, SpriteKind.TalkingWorker)
        Arbejdermand.setPosition(450, 608)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Triggergulv`, function (sprite, location) {
    if (Plusplus == 0) {
        game.showLongText("Det må være dig der er kommet for at hjælpe mig? ", DialogLayout.Full)
        game.showLongText("Din første opgave er at hjælpe med at neutralisere deres syre fyldige farvekemikalier- Da jeg er træt af de hælder det i floden. Find noget natron der kan neutralisere syren. ", DialogLayout.Full)
        game.showLongText("Flasken du leder efter er blå, med et hvidt N på midten. Den samles op med knab B og hældes med Knap A. Der er 3 tønder det skal hældes i.", DialogLayout.Full)
        Plusplus += 1
    }
    if (Plusplus == 2) {
        game.showLongText("Du er sørme effektiv", DialogLayout.Full)
        game.showLongText("Jeg har en opgave mere til dig", DialogLayout.Full)
        game.showLongText("Du skal finde chefen fra fabrikken og overbevise ham om de skal begynde og bruge deres overskuds stof til at lave sokker, så der ikke er så meget materiale der går til spilde", DialogLayout.Full)
        game.showLongText("Han burde være inde på sit kontor, opsøg ham og se hvad det kræver før han er villig til at ændre det", DialogLayout.Full)
        Plusplus += 1
    }
})
function Fabrikschef () {
    if (LVL == 1) {
        Cheff = sprites.create(assets.image`Karakter14`, SpriteKind.Chefen)
        Cheff.setPosition(384, 208)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL == 2) {
        shootDirection = 4
    }
    if (LVL == 1 && PickUpNatron != 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `],
        500,
        false
        )
    }
    if (LVL == 2 && PickUpNatron != 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `],
        500,
        false
        )
    }
})
function Polyester_varmer () {
    if (LVL == 1) {
        Poly_varme = sprites.create(assets.image`Polyester blander`, SpriteKind.Maskine)
        Poly_varme.setPosition(80, 784)
        animation.runImageAnimation(
        Poly_varme,
        assets.animation`Maskine animation1`,
        200,
        true
        )
        Poly_varme = sprites.create(assets.image`Polyester blander`, SpriteKind.Maskine)
        Poly_varme.setPosition(80, 880)
        animation.runImageAnimation(
        Poly_varme,
        assets.animation`Maskine animation1`,
        200,
        true
        )
    }
}
function Maskineri () {
    if (LVL == 1) {
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(512, 304)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(560, 304)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(608, 304)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(560, 368)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(512, 368)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(608, 368)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(512, 448)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(560, 448)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
        Farve_maskine = sprites.create(assets.image`Farvemaskine`, SpriteKind.Maskine)
        Farve_maskine.setPosition(608, 448)
        animation.runImageAnimation(
        Farve_maskine,
        assets.animation`Farveanimation`,
        200,
        true
        )
    } else {
    	
    }
}
function Farvebeholdere () {
    if (LVL == 1) {
        Farvebeholder1 = sprites.create(assets.image`Object03`, SpriteKind.MissionGadget)
        Farvebeholder1.setPosition(30, 384)
        Farvebeholder2 = sprites.create(assets.image`Object03`, SpriteKind.MissionGadget)
        Farvebeholder2.setPosition(144, 928)
        Farvebeholder3 = sprites.create(assets.image`Object03`, SpriteKind.MissionGadget)
        Farvebeholder3.setPosition(928, 432)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Dør01`, function (sprite, location) {
    if (LVL == 1 && Plusplus >= 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Maskine)
        sprites.destroyAllSpritesOfKind(SpriteKind.Worker)
        sprites.destroyAllSpritesOfKind(SpriteKind.Klimamand)
        sprites.destroyAllSpritesOfKind(SpriteKind.Chefen)
        sprites.destroyAllSpritesOfKind(SpriteKind.TalkingWorker)
        sprites.destroyAllSpritesOfKind(SpriteKind.MissionGadget)
        LVL = 2
        tiles.setCurrentTilemap(tilemap`Lvl roof`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
        scene.cameraFollowSprite(mySprite)
        info.setScore(0)
        if (LVL == 2) {
            controller.moveSprite(mySprite, 75, 75)
        }
        shootDirection = 1
        if (LVL == 2 && TekstCount == 0) {
            game.splash("Over de seneste par dage har fabrikkens energiforbrug bestået mere af fossile brændsler, end det plejer. Vask solcellerne af på taget ved at trykke på tasten 'A', for at få mere bæredygtig energi.")
            TekstCount += 1
        }
    }
})
function Natron () {
    if (LVL == 1) {
        Natron1 = sprites.create(assets.image`Object01`, SpriteKind.MissionGadget)
        Natron1.setPosition(928, 928)
    }
}
info.onScore(27, function () {
    if (LVL == 0) {
        if (GameAstarted == true) {
            GameAstarted = false
            Spiller.setPosition(152, 106)
            Followsprite = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Spiller, -27, -24)
            Spiller.follow(Followsprite)
            pause(2200)
            Cleanup_EnemySprites()
            info.changeScoreBy(1)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chefen, function (sprite, otherSprite) {
    if (Plusplus == 3) {
        game.showLongText("Chef: Hvad kan jeg gøre for dig?", DialogLayout.Bottom)
        game.showLongText("Spiller: Jeg har fået besked på at få dig til at udnytte det overskydende stof", DialogLayout.Bottom)
        game.showLongText("Chef: Nej det har vi ikke tid til, de grønne trøjer er et hit", DialogLayout.Bottom)
        game.showLongText("Spiller: Kom nu. der må da væære noget jeg kan gøre", DialogLayout.Bottom)
        game.showLongText("Chef: Hmmmm måske er der en ting der kan få mig til at ændre mening", DialogLayout.Bottom)
        game.showLongText("Chef: Du skal finde døren til taget hvor der venter en opgave, når denne opgave er løst vil jeg sætte sokke produktionen igang", DialogLayout.Bottom)
        Plusplus += 1
    }
    if (info.score() == 144) {
        game.showLongText("Chef: Det var du hurtig til", DialogLayout.Bottom)
        game.showLongText("Spiller: Ja det kan kun gå for langsomt med at få den her fabrik omstillet", DialogLayout.Bottom)
        game.showLongText("Chef: Men før vi kan sætte sokke produktionen igang, mangler jeg du gør en sidste ting", DialogLayout.Bottom)
        game.showLongText("Vi skal have koblet polyester maskinerne til strømmen, nu hvor vi får en masse strøm fra vores solcelle anlæg", DialogLayout.Bottom)
        game.showLongText("Find rummet med polyester maskinerne, og gå hen til maskinen poly væv for at se hvad du skal gøre", DialogLayout.Full)
        info.changeScoreBy(1)
    }
    if (KemiSpørgsmål == 10) {
        game.showLongText("Chef: Godt gået! Nu vil jeg som aftalt sætte gang i produktionen af sokker", DialogLayout.Bottom)
        game.gameOver(true)
    }
})
function Skæreren () {
    if (LVL == 1) {
        Poly_varme = sprites.create(assets.image`Skæremaskine`, SpriteKind.Maskine)
        Poly_varme.setPosition(700, 60)
        animation.runImageAnimation(
        Poly_varme,
        assets.animation`Skæreanimation`,
        200,
        true
        )
        Poly_varme = sprites.create(assets.image`Skæremaskine`, SpriteKind.Maskine)
        Poly_varme.setPosition(512, 212)
        animation.runImageAnimation(
        Poly_varme,
        assets.animation`Skæreanimation`,
        200,
        true
        )
    }
}
function Polyvæveren () {
    if (LVL == 1) {
        Polyvæv = sprites.create(assets.image`Polyester væver`, SpriteKind.Maskine)
        Polyvæv.setPosition(220, 832)
        animation.runImageAnimation(
        Polyvæv,
        assets.animation`Maskinanimation02`,
        200,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level inside factory`)
    LVL = 1
    mySprite.setPosition(430, 120)
    if (LVL == 1) {
        controller.moveSprite(mySprite, 85, 85)
    }
    scene.cameraFollowSprite(mySprite)
    Maskineri()
    Truck()
    Skæreren()
    Polyester_varmer()
    Factoryworker()
    Klimaaktivist()
    Natron()
    Farvebeholdere()
    Fabrikschef()
    Polyvæveren()
    if (Farvebeholderne >= 3 && Farvebeholderne < 5) {
        animation.runImageAnimation(
        Farvebeholder1,
        assets.animation`Farveanimation0`,
        300000,
        true
        )
        animation.runImageAnimation(
        Farvebeholder2,
        assets.animation`Farveanimation0`,
        300000,
        true
        )
        animation.runImageAnimation(
        Farvebeholder3,
        assets.animation`Farveanimation0`,
        300000,
        true
        )
    }
})
function IndePåFabrik () {
    LVL = 1
    tiles.setCurrentTilemap(tilemap`level inside factory`)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    mySprite = sprites.create(assets.image`Mainkarakter`, SpriteKind.Player)
    mySprite.setPosition(450, 960)
    game.showLongText("Find klimaaktivisten i skære rummet", DialogLayout.Full)
    scene.cameraFollowSprite(mySprite)
    Maskineri()
    Truck()
    Skæreren()
    Polyester_varmer()
    Polyvæveren()
    Factoryworker()
    Klimaaktivist()
    Natron()
    Farvebeholdere()
    Fabrikschef()
    if (LVL == 1) {
        controller.moveSprite(mySprite, 85, 85)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 352, 2314, 79, 38, 150, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    sprites.destroy(kemi_1, effects.hearts, 200)
    info.changeScoreBy(1)
})
let Polyvæv: Sprite = null
let Followsprite: Sprite = null
let Farve_maskine: Sprite = null
let Cheff: Sprite = null
let Worker1: Sprite = null
let Poly_varme: Sprite = null
let KemiSpørgsmål = 0
let Klimaaktivisten: Sprite = null
let TekstCount = 0
let Spiller: Sprite = null
let Plusplus = 0
let Farvebeholderne = 0
let Farvebeholder3: Sprite = null
let Farvebeholder2: Sprite = null
let Farvebeholder1: Sprite = null
let Trucken: Sprite = null
let GameAstarted = false
let information = 0
let Natron1: Sprite = null
let Kontordame: Sprite = null
let Arbejdermand: Sprite = null
let kemi_1: Sprite = null
let nykemi = 0
let tilfældigkemi = 0
let projectile: Sprite = null
let mySprite: Sprite = null
let PickUpNatron = 0
let shootDirection = 0
let nybaggrund = 0
let tilfældigbaggrund = 0
let LVL = 0
let startmode = false
scene.setBackgroundImage(assets.image`Gamestart`)
startmode = true
LVL = 0
while (startmode) {
    tilfældigbaggrund = nybaggrund
    pause(500)
    while (tilfældigbaggrund == nybaggrund) {
        nybaggrund = randint(1, 3)
        if (tilfældigbaggrund == 1) {
            scene.setBackgroundImage(assets.image`Gamestart`)
        } else if (tilfældigbaggrund == 2) {
            scene.setBackgroundImage(assets.image`myImage0`)
        } else if (tilfældigbaggrund == 3) {
            scene.setBackgroundImage(assets.image`myImage1`)
        }
    }
}
forever(function () {
    for (let index = 0; index < 100000000000000000000; index++) {
        music.setVolume(23)
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(208, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(147, music.beat(BeatFraction.Quarter))
        music.playTone(175, music.beat(BeatFraction.Quarter))
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(208, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(147, music.beat(BeatFraction.Quarter))
        music.playTone(175, music.beat(BeatFraction.Quarter))
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(208, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(147, music.beat(BeatFraction.Quarter))
        music.playTone(175, music.beat(BeatFraction.Quarter))
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
    }
})
