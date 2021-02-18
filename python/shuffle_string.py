# Description:
# Given a string s and an integer array indices of the same length.
# The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
# Return the shuffled string.
# Input: s = "toyPnh" indices = [2, 4, 1, 0, 5, 3]
# Output: "Python"

def shuffle_string(string, list):
    output = ''
    for index_of_return in range(len(string)):
        location = list.index(index_of_return)
        output += string[location]
    return output

print(shuffle_string('toyPnh', [2, 4, 1, 0, 5, 3]))
