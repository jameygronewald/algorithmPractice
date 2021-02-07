# Write a constructor to represent any rational number and write methods to add, multiply, view, and square rational numbers

from fractions import gcd

def rational_number(n, d):
    g = gcd(n, d)
    return [n // g, d // g]

def numer(rat_num):
    return rat_num[0]

def denom(rat_num):
    return rat_num[1]

def print_rationals(rat_num):
    return print(f'{rat_num[0]}/{rat_num[1]}')

def add_rationals(num_one, num_two):
    x, y = numer(num_one), numer(num_two)
    dx, dy = denom(num_one), denom(num_two)
    return rational_number(dx * y + dy * x, dx * dy)

def multiply_rationals(num_one, num_two):
    return rational_number(numer(num_one) * numer(num_two), denom(num_one) * denom(num_two))

def square_rational(num):
    return multiply_rationals(num, num)

one_half = rational_number(1, 2)
two_thirds = rational_number(2, 3)

print_rationals(one_half)
print_rationals(two_thirds)

print(numer(two_thirds))
print(denom(two_thirds))

print(add_rationals(one_half,two_thirds))
print(multiply_rationals(one_half,two_thirds))
print(square_rational(one_half))

