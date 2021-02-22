input.onButtonPressed(Button.A, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.stopAllSounds()
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    while (5 > maqueen.Ultrasonic(PingUnit.Centimeters)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 39)
        basic.showString("Stop")
        basic.showArrow(ArrowNames.East)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.stopAllSounds()
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    while (true) {
        basic.showArrow(ArrowNames.West)
        basic.showString("Move")
    }
})
basic.showString("Hello!")
basic.pause(1000)
basic.showArrow(ArrowNames.West)
