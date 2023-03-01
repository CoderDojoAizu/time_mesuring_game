input.onButtonPressed(Button.A, function () {
    ストップ = Math.round((input.runningTime() - スタート) / 1000)
    if (ストップ == 当てる時間) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.Happy)
    } else {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
    basic.showNumber(ストップ)
})
input.onButtonPressed(Button.B, function () {
    スタート = input.runningTime()
    basic.showIcon(IconNames.SmallDiamond)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
})
let スタート = 0
let ストップ = 0
let 当てる時間 = 0
当てる時間 = 10
basic.showNumber(当てる時間)
