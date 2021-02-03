def loop(start, test, update, body):
    while (test(start)):
        body(start)
        start = update(start)

loop(3, lambda n: n > 0, lambda n: n - 1, print)