# Write code to return a list of all perfect numbers (numbers whose divisors sum to the number) in a given range `limit`

def divisors(n):
    return [x for x in range(1, n // 2 + 1) if n % x == 0]

def perfect_nums(limit):
    return [x for x in range(1, limit + 1) if sum(divisors(x)) == x]

print(perfect_nums(1000))
print(perfect_nums(10000))