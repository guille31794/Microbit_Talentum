def on_button_pressed_a():
    music.ring_tone(988)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 39)
    while True:
        basic.show_string("Stop")
        basic.show_arrow(ArrowNames.EAST)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    maqueen.motor_stop(maqueen.Motors.ALL)
    music.play_tone(131, music.beat(BeatFraction.BREVE))
    basic.show_arrow(ArrowNames.WEST)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("Hello!")
basic.pause(1000)
basic.show_arrow(ArrowNames.WEST)