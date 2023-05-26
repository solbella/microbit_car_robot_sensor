basic.showIcon(IconNames.Diamond)
let 거리 = 0
basic.forever(function () {
    거리 = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (거리 <= 10) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    if (거리 >= 10 && 거리 <= 20) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    if (거리 >= 20) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.stopAllSounds()
    }
})
