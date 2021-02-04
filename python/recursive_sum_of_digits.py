def sum_of_digits(num):
    if num < 10:
        return num
    else:
        last_digit = num % 10
        rest_of_digits = num // 10
        return sum_of_digits(rest_of_digits) + last_digit

print(sum_of_digits(1234))
print(sum_of_digits(7593))