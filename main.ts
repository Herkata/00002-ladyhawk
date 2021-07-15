basic.forever(function () {
    if (input.lightLevel() > 130) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (input.lightLevel() < 110) {
        basic.showLeds(`
            # . . . #
            # # # # #
            # # . # #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (input.lightLevel() > 111 && input.lightLevel() < 129) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . # # # #
            . # # # .
            `)
    }
})
