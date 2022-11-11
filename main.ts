let y = 0
let x = 0
input.onButtonPressed(Button.B, function () {
    y = 0
    for (let index = 0; index < 5; index++) {
        x = 0
        for (let index = 0; index < 5; index++) {
            led.unplot(x, y)
        }
        basic.pause(1000)
        x += 1
        y += 1
    }
})
basic.forever(function () {
	
})
