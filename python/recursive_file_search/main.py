import os

output = open('extension_search.txt', 'w')

dirname = '../../projects'
for root, dirnames, files in os.walk(dirname):
    for file in files:
        if file.endswith('.py'):
            output.write(os.path.join(root, file) + '\n')

output.close()