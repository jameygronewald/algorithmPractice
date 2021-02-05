def fibs(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fibs(n - 1) + fibs(n - 2)

print(fibs(7))
print(fibs(10))