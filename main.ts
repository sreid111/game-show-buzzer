input.onPinPressed(TouchPin.P0, function () {
	
})
// When a buzzer is the fastest it will receive its serial number back to confirm. Then plays feedback to user. 
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == control.deviceSerialNumber()) {
        basic.showIcon(IconNames.Triangle)
        state += 1
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(control.deviceSerialNumber())
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.showIcon(IconNames.Triangle)
})
radio.setGroup(11)
let state = 0
radio.setTransmitSerialNumber(true)
radio.sendNumber(control.deviceSerialNumber())
// state 1 = paired and ready
// state 2 = you won
// 
basic.forever(function () {
    if (state == 1) {
        basic.showIcon(IconNames.Triangle)
    } else if (state == 2) {
        basic.showIcon(IconNames.Happy)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(2000)
        state = 1
    }
})
