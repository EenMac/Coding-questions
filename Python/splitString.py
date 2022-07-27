from string import punctuation

from numpy import append


def splitString(string):
    words = []
    punctuation = []
    sentence = string.split()
    for item in sentence:
        if item in (","):
            punctuation.append(item)
        else:
            words.append(item)
    return "words array = {words}".format(words=words), "punctuation array = {punctuation}".format(punctuation=punctuation)


print(splitString("this , is pretty , pointless"))
