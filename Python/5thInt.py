# check whether the 5th element occurs more than once in alist

list = [19, 5, 6, 8, 9, 4, 4, 9, 9, 109]


def check5thInt(list):
    if len(list) == 10 and list.count(list[4]) == 3:
        print("This Statement is true")
    else:
        print("False")


check5thInt(list)
