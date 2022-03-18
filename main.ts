enum RadioMessage {
    message1 = 49434,
    Hello = 49337,
    Help = 43444,
    Goodbye = 16885
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.Hello)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.Goodbye)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.Help)
})
