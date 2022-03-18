enum RadioMessage {
    message1 = 49434,
    Hello = 49337,
    Help = 43444,
    Goodbye = 16885
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.Hello)
})
radio.onReceivedMessage(RadioMessage.Hello, function () {
    basic.showString("Hello!")
})
radio.onReceivedMessage(RadioMessage.Help, function () {
    basic.showString("Help!")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.Goodbye)
})
/**
 * Chat via multiple microbits!
 */
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.Help)
})
radio.onReceivedMessage(RadioMessage.Goodbye, function () {
    basic.showString("Goodbye.")
})
