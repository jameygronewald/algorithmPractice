def divisors(n):
    return [x for x in range(1, n // 2 + 1) if n % x == 0]

def sum_divisors(n):
    sum = 0
    for x in divisors(n):
        sum += x
    return sum

def perfect_nums(limit):
    return [x for x in range(1, limit + 1) if sum_divisors(x) == x]

print(sum_divisors(100))

print(perfect_nums(1000))