input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        tempo += -1
        basic.showNumber(tempo)
        basic.pause(100)
    }
})
let tempo = 0
basic.showNumber(10)
let definir_tempo_para = 10
