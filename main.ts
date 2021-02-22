input.onButtonPressed(Button.A, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.stopAllSounds()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 39)
    while (true) {
        basic.showString("Stop")
        basic.showArrow(ArrowNames.East)
    }
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.stopAllSounds()
    basic.showArrow(ArrowNames.West)
})
basic.showString("Hello!")
basic.pause(1000)
basic.showArrow(ArrowNames.West)
