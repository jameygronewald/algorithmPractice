def is_link(s):
    """s is a linked list if it is empty or a (first, rest) pair."""
    return s == None or (len(s) == 2 and is_link(s[1]))
def link(first, rest):
    """Construct a linked list from its first element and the rest."""
    assert is_link(rest), "rest must be a linked list."
    return [first, rest]
def first(s):
    """Return the first element of a linked list s."""
    assert is_link(s), "first only applies to linked lists."
    assert s != None, "empty linked list has no first element."
    return s[0]
def rest(s):
    """Return the rest of the elements of a linked list s."""
    assert is_link(s), "rest only applies to linked lists."
    assert s != None, "empty linked list has no rest."
    return s[1]

four = link(1, link(2, link(3, link(4, None))))
print(first(four))
print(rest(rest(four)))

def len_list(s):
    length = 0
    while s != None:
        s, length = rest(s), length + 1
    return length

def get_link_value(s, i):
    while i > 0:
        s, i = rest(s), i - 1
    return first(s)

print(len_list(four))
print(get_link_value(four, 2))

def extend_link(s, t):
    """Return a list with the elements of s followed by those of t."""
    assert is_link(s) and is_link(t)
    # Base case
    if s == None:
        return t
    # Otherwise, recursive call to traverse first list 
    else:
        return link(first(s), extend_link(rest(s), t))