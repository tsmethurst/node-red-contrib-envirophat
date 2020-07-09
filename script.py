from envirophat import motion
from envirophat import light
from envirophat import weather
from envirophat import leds
import time

leds.off()

while True:
    x, y, z = motion.accelerometer()
    r, g, b = light.rgb()
    results = {
            "lightR": r,
            "lightG": g,
            "lightB": b,
            "lightLevel": light.light(),
            "temperature": weather.temperature(),
            "pressure": weather.pressure(),
            "motionX": x,
            "motionY": y,
            "motionZ": z,
            "heading": motion.heading()
                }
    print(results)
    sys.stdout.flush()
    time.sleep(0.5)
