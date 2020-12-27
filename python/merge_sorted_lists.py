# Write code to merge two sorted lists into a new sorted list

def merge_sorted_lists(list1, list2):
    new_list = []
    j = 0

    for i, num in enumerate(list1):
    
        while j < len(list2):
            if num > list2[j]:
                new_list.append(list2[j])
                j += 1
            elif num < list2[j]:
                new_list.append(num)
                break
            else:
                new_list.append(num)
                new_list.append(list2[j])
                j += 1
                break

        if (j >= len(list2)):
            new_list.extend(list1[i:])
            return new_list
        
    if (j < len(list2)):
        new_list.extend(list2[j:])


    return new_list
            


print(merge_sorted_lists([12, 13, 20, 51], [8, 14, 40, 41, 43, 50]))
print(
  merge_sorted_lists(
    [1, 5, 23, 63, 143, 213, 634, 4443, 19840],
    [8, 14, 40, 41, 43, 50]
  )
)