import turtle
import math
import time

# Screen setup
screen = turtle.Screen()
screen.title("Tulip Heart ❤️")
screen.bgcolor("black")
screen.setup(width=900, height=900)
screen.tracer(0)

# Turtle setup
t = turtle.Turtle()
t.hideturtle()
t.penup()
t.color("#ffb6c1")  # Light Pink

# Bigger heart
scale = 22

while True:
    t.clear()

    for i in range(180):
        angle = math.radians(i * 2)

        x = 16 * (math.sin(angle) ** 3) * scale
        y = (13 * math.cos(angle)
             - 5 * math.cos(2 * angle)
             - 2 * math.cos(3 * angle)
             - math.cos(4 * angle)) * scale

        t.goto(x, y)
        t.write(
            "Tulip",
            align="center",
            font=("Arial", 14, "bold")
        )

        screen.update()
        time.sleep(0.005)  # Faster animation

    time.sleep(1)

turtle.done()