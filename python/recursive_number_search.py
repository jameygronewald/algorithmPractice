# Write a function that takes a num argument and returns the path to that number by starting at 1 and adding 5 or multiplying by 3; if there is no such number, the function returns null;

def find_solution(num):
    def search(current, history):
        if current == num:
            return history
        elif current > num:
            return None
        else:
            return search(current + 5, f"({history} + 5)") or search(current * 3, f"({history} * 3)")
    return search(1, '1')

print(find_solution(13))
print(find_solution(15))
print(find_solution(26))