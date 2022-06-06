input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("" + (Consume))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("" + (Temperature))
})
let Consume = 0
let Temperature = 0
Temperature = 0
basic.forever(function () {
    if (Temperature < 21) {
        basic.pause(1000)
        Temperature += 1
        Consume = 1.138 * Temperature
    }
})
