
class Car:
    car_name = "VW"
    car_engine = "V12"


def rev():
    print(f"'{Car.car_name}' '{Car.car_engine}' goes vroom vroom")


Car.rev()
