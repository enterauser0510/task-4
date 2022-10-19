let verariabol = 0
let vorariboooo = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(verariabol, 0)
        basic.pause(200)
        verariabol += 1
    }
    if (verariabol > 4) {
        verariabol = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, vorariboooo)
        basic.pause(200)
        vorariboooo += 1
    }
    if (vorariboooo > 4) {
        vorariboooo = 0
    }
})
