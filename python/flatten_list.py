def flatten_list(list_of_lists):
    return [item for list in list_of_lists for item in list]

print(flatten_list([
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
  ]))