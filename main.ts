enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.message1)
})
