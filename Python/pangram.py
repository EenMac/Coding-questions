def is_pangram(s):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for i in alphabet:
        if i in s:
            return True
        else:
            return False
