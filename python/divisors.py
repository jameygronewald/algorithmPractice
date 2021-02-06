# Function to get divisors of input integer `n`

def divisors(n):
    return [x for x in range(1, n // 2 + 1) if n % x == 0] + [n]

print(divisors(100))
print(divisors(1))
