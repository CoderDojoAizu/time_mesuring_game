input.onButtonPressed(Button.A, function () {
    ボタンを押した時間 = Math.round((input.runningTime() - 計測開始時間) / 1000)
    if (ボタンを押した時間 == タイマー時間) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (ボタンを押した時間 > タイマー時間) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . . # . .
            . . . # .
            . # # . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # . . .
            `)
    }
    basic.pause(2000)
    basic.showNumber(ボタンを押した時間)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallDiamond)
    計測開始時間 = input.runningTime()
})
let 計測開始時間 = 0
let ボタンを押した時間 = 0
let タイマー時間 = 0
タイマー時間 = 5
basic.showNumber(タイマー時間)
