def print_staircase(num_of_stairs):
    if num_of_stairs == 1:
        return print('#')
    else:
        print_staircase(num_of_stairs - 1)
        print('#' * num_of_stairs)

print_staircase(20)
print_staircase(10)