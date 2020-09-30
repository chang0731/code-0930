let GPA = 0
input.onGesture(Gesture.Shake, function () {
    GPA = randint(80, 100)
    if (GPA <= 84) {
        basic.showNumber(GPA)
        basic.showString("A-")
    } else if (GPA >= 90) {
        basic.showNumber(GPA)
        basic.showString("A+")
    } else {
        basic.showNumber(GPA)
        basic.showString("A")
    }
})
