# Write code to return a new string with all of the characters in `str` reversed.
# You may NOT use the built-in reverse method

def reverse_in_place(str):
    str_list = list(str)
    
    for i in range(len(str_list)//2):
        temp = str_list[len(str_list) - 1 - i]
        str_list[len(str_list) - 1 -i] = str_list[i]
        str_list[i] = temp
    
    return ''.join(str_list)
    


print(reverse_in_place('hello world'))
print(reverse_in_place('python is awesome'))