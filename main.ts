input.onButtonPressed(Button.A, function () {
    Initial_Loop = 0
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
    Initial_Loop = 1
})
let Initial_Loop = 0
basic.showString("Hello!")
basic.pause(1000)
basic.showArrow(ArrowNames.West)
Initial_Loop = 1
while (Initial_Loop == 1) {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(1000)
}
